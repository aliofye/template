#!/bin/bash

# This script is only used to debug typecheck issues locally. 
# You can ignore it or delete it.

echo "Running TypeScript build..."
bunx tsc -b --noEmit
EXIT_CODE=$?

if [ $EXIT_CODE -ne 0 ]; then
  echo "TypeScript build failed with exit code $EXIT_CODE."
  exit $EXIT_CODE
fi

echo "TypeScript build succeeded. $EXIT_CODE"