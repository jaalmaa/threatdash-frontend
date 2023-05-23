# Threatdash

## About

Threatdash is a project designed to pull telemetry collected following successful logins to the Cowrie honeypot.
This aims to address a gap in similar platforms that only collect and display the metadata associated with the compromises, typically IP addresses, credentials used etc.

The logging provided by the Cowrie honeypot is much more extensive and Threatdash takes advantage of this by displaying all of the activity collected by the honeypot following a successful compromise. This includes process command-lines, malware download URLs and file hashes.

#### **That's Really Cool! How do I see it?**

A public, deployed version of Threatdash is available [here]().

---

## Installation

Threatdash is open-source, so to deploy it yourself, use the following instructions:

### 1. Set up Clerk

Threatdash uses [Clerk](https://clerk.com) to handle user authentication and management. Follow the set up guide provided by Clerk to configure accepted authentication methods and access your API keys.

The API keys needed from Clerk are the following:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

These keys should be written to your `.env` file in the project root (see `.env.example`), or alternatively use whichever secret management solution is offered by your hosting provider.

### 2. Set up MongoDB

Threatdash uses MongoDB to store collected interaction data (I know...). As such, a MongoDB database connection string is also required within the `.env` file, or the secrets management mechanism used by your hosting provider. For simplicity and small instances, a free-tier MongoDB Atlas instance is suffucient.

The connection string should look something like the following:

- `mongodb+srv://<username>:<password>@<mongodb_instance>.mongodb.net/<db_name>`

### 3. Set up the Cowrie Honeypot

If you're gonna be collecting data from a honeypot, you need a honeypot. For use with Threatdash, [our fork](https://github.com/threatdash/cowrie) of Cowrie is required. This fork contains some modifications to the MongoDB output plugin that allows for the collection of data from interactions with the honeypot following a successful login.

Next, in the Honeypot configuration, enable MongoDB output and provide the MongoDB connection string from the previous step.

### 4. Deploy it!

Fork or clone the repo and use your favorite hosting service to deploy the web app.
