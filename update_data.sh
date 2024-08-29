#!/bin/bash

set -e

source $HOME/.virtualenvs/awscli/bin/activate

set -x

COUNT=$(aws dynamodb describe-table --table-name "prod-listing-subscribers" --region eu-west-1 | jq '.Table.ItemCount')

if [[ -z "$COUNT" ]]; then
   echo "Error getting subscribers count!"
   exit 1
fi

if [ "$COUNT" -eq "0" ]; then
   echo "Subscribers count is zero!"
   exit 2
fi

echo "count: $COUNT" > data/subscribers.yml

set +x

deactivate

echo "Done"