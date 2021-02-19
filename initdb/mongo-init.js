db = db.getSiblingDB('config_db');
db.createUser(
        {
            user: "CCM",
            pwd: "Expertflow464",
            roles: [
                {
                    role: "readWrite",
                    db: "config_db"
                }
            ]
        }
);

