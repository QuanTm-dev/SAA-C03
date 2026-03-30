#!/usr/bin/env bash

curl -X POST http://localhost:8765 \
-H ""Content-Type: application/json"" \
-d '{
    ""action"": ""addNotes"",
    ""version"": 6,
    ""params"": {
        ""notes"": [
            {
                ""deckName"": <deck-name>,
                ""modelName"": ""Basic"",
                ""fields"": {
                    ""Front"": <front-field-value>,
                    ""Back"": <back-field-value>
                },
                ""tags"": [""saa-c03""]
            }
        ]
    }
}'
