export const commentData=[
    {
        "id": 1,
        "user": "Alice",
        "content": "This is the first comment.",
        "timestamp": "2024-07-05T10:00:00Z",
        "replies": [
            {
                "id": 2,
                "user": "Bob",
                "content": "This is a reply to the first comment.",
                "timestamp": "2024-07-05T10:05:00Z",
                "replies": [
                    {
                        "id": 3,
                        "user": "Charlie",
                        "content": "This is a nested reply.",
                        "timestamp": "2024-07-05T10:10:00Z",
                        "replies": []
                    },
                    {
                        "id": 4,
                        "user": "Dave",
                        "content": "Another nested reply.",
                        "timestamp": "2024-07-05T10:15:00Z",
                        "replies": [
                            {
                                "id": 5,
                                "user": "Eve",
                                "content": "Replying to the nested reply.",
                                "timestamp": "2024-07-05T10:20:00Z",
                                "replies": []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "user": "Frank",
        "content": "This is another top-level comment.",
        "timestamp": "2024-07-05T11:00:00Z",
        "replies": [
            {
                "id": 7,
                "user": "Grace",
                "content": "Reply to Frank's comment.",
                "timestamp": "2024-07-05T11:05:00Z",
                "replies": []
            }
        ]
    }
]
