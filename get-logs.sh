#!/bin/bash
curl -L -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/cptleftnut/DAVOs/actions/jobs/42610738421/logs" > run-log.zip
