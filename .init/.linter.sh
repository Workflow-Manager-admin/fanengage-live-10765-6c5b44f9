#!/bin/bash
cd /home/kavia/workspace/code-generation/fanengage-live-10765-6c5b44f9/football_engagement_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

