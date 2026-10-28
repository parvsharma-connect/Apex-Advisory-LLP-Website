#!/bin/sh
set -eu
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
ENV_FILE="$ROOT/.env.qwen-local"
if [ ! -f "$ENV_FILE" ]; then
  KEY=$(openssl rand -hex 32)
  umask 077
  printf 'QWEN_PROXY_API_KEY=%s\nOLLAMA_BASE_URL=http://127.0.0.1:11434\nOLLAMA_MODEL=qwen3:8b\nQWEN_PROXY_HOST=127.0.0.1\nQWEN_PROXY_PORT=11435\n' "$KEY" > "$ENV_FILE"
  echo "Created private proxy settings at $ENV_FILE"
else
  echo "Using existing private proxy settings at $ENV_FILE"
fi
if ! ollama list | awk 'NR>1 {print $1}' | grep -qx 'qwen3:8b'; then
  echo 'qwen3:8b is not installed. Run: ollama pull qwen3:8b' >&2
  exit 1
fi
set -a
. "$ENV_FILE"
set +a
echo 'Starting the protected local Qwen proxy. Keep this terminal open.'
exec node "$ROOT/server/localQwenProxy.mjs"
