# Postman Collection

## How to Import the Collection

1. Open Postman
2. Click **Import** at the top left
3. Click **Choose Files**
4. Select the `.json` file from this folder
5. Click **Import**

The collection will appear in your left sidebar under **Collections**.

## How to Run the Tests

1. Make sure your server is running at `http://localhost:3000`
2. Click on the collection name in the sidebar
3. Click **Run collection** (the play button)
4. Click **Run** in the popup window
5. Postman will run all requests and show pass/fail results

## Environment Setup

If the collection uses variables, create an environment:

1. Click **Environments** in the left sidebar
2. Click **+** to create a new environment
3. Add this variable:

| Variable | Value |
|----------|-------|
| base_url | http://localhost:3000 |

4. Select the environment from the top right dropdown before running
