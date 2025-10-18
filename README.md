
A minimal Node.js/Express that exposes a single endpoint, `/me`, returning a small user profile together with a cat fact fetched from a public API. 


# Project overview

This small service demonstrates a typical Express-based HTTP API. It serves a single GET route (`/me`) that returns:

- a hard-coded user profile (email, name, tech stack)
- a short cat fact fetched from https://catfact.ninja/fact
- a UTC timestamp

# Features

- Lightweight Express server with a single API endpoint
- Uses `axios` to fetch data from an external API and includes a graceful fallback when the external API fails
- Simple project layout suitable for learning or scaffolding

# Tech stack

- Node.js (JavaScript)
- Express
- Axios
- nodemon


## API reference

GET /me

Returns a JSON payload containing a `status` string, a `user` object, a `fact` (string), and a `timestamp` in ISO 8601 format.

Example success response:

```json
{
	"status": "success",
	"user": {
		"email": "aliyuIbrahim@example.com",
		"name": "Aliyu Ibrahim",
		"stack": "Node.js/Express"
	},
	"fact": "Cats have five toes on their front paws, but only four toes on their back paws.",
	"timestamp": "2025-10-18T12:34:56.789Z"
}

If the external cat-fact API cannot be reached, the service will return the same 'user' object and a fallback 'fact' value: '"The cat fact api fails!!!!"'.

# Configuration

The repository currently ships with a hard-coded port (3000) in `app.js`. To make the service configurable, the following environment variables are recommended:

- `PORT` — the TCP port the server listens on (default: `3000`)
- `CATFACT_URL` — override the cat fact API URL (default: `https://catfact.ninja/fact`)


