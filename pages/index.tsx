// ... (previous code)

const discordIdLink = "https://discord.com/users/776757761701838858";

// ... (remaining code)

<Container>
    <Title>OpInsel profile readme 🏷️</Title>
    <Paragraph>Utilize OpInsel to display your Discord Presence in your GitHub Profile</Paragraph>
    <br />
    {/* Replace the Input with the new content */}
    <a href={discordIdLink}>
        <img src="https://api.opinsel.de/api/776757761701838858?hideTimestamp=true&idleMessage=Just%20chillin'%20at%20the%20moment..." align="right" />
    </a>
    {/* Add new content for free space */}
    <p>Free space next to the Discord ID image...</p>
    {userId ? (
        <>
            <Output>
                [![Discord Presence](https://api.opinsel.de/api/{userId})](https://discord.com/users/{userId})
            </Output>
            <ActionButton onClick={copy}>{copyState}</ActionButton>
            <a
                href="https://github.com/nils-afk"
                target="_blank"
                rel="noreferrer"
            >
                <ActionButton>Options</ActionButton>
            </a>
            <a
                style={{ textDecoration: "none" }}
                target="_blank"
                href={userError && "https://discord.gg/wBuyUSAegK"}
                rel="noreferrer"
            >
                <Example
                    src={`/api/${userId}`}
                    alt={`${userError || "Please provide a valid user ID!"}`}
                    style={{ color: "#ff8787" }}
                />
            </a>
        </>
    ) : null}
</Container>

// ... (remaining code)
