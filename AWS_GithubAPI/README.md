This repository contains a script (list_user.sh) that lists all the collaborators with read access (pull access) to a specified GitHub repository. The script uses GitHub's API to retrieve the list of collaborators and filters out those who have read permissions.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Setup](#setup)
   - [Create AWS EC2 Instance](#create-aws-ec2-instance)
   - [Clone the Repository](#clone-the-repository)
3. [Usage](#usage)
   - [Setting Up GitHub API Access](#setting-up-github-api-access)
   - [Run the Script](#run-the-script)
4. [Example](#example)

---

## Prerequisites
- **AWS EC2 Instance** (Ubuntu or any other Linux-based instance)
- **GitHub Personal Access Token** with the required permissions (read & write repository permissions).
- **SSH Keypair** for securely connecting to your EC2 instance.

---

## Setup

### Create AWS EC2 Instance

1. **Login to your AWS Console**: Navigate to the EC2 dashboard.
2. **Launch an EC2 Instance**: 
   - Choose an Ubuntu instance (or any preferred Linux distribution).
   - Configure the instance (choose security groups, instance size, etc.).
   - Download the **Key Pair** for secure SSH access.

3. **SSH into the EC2 Instance**:
   After launching the instance, SSH into the instance using the following command:
   ```bash
   ssh -i keypairname.pem ubuntu@<EC2-Instance-IP>
   ```

4. **Install Git**: If Git is not installed on your instance, install it using the command:
   ```bash
   sudo apt-get update
   sudo apt-get install git
   ```

### Clone the Repository

Once logged into your EC2 instance, clone the repository using the following commands:

```bash
git clone git@github.com:ayushsharma-1/AWS-Amazon-Web-Services-Projects.git
```

Navigate to the relevant directory:
```bash
cd AWS-Amazon-Web-Services-Projects/AWS_GithubAPI
```

---

## Usage

### Setting Up GitHub API Access

1. **Generate a Personal Access Token**:
   - Go to your GitHub account's **Settings**.
   - Under **Developer Settings**, click on **Personal Access Tokens**.
   - Generate a token for "Classic" use.
   - **Permissions**: Give all **read and write** permissions for repositories. Do not select SSH or admin permissions.
   - **Important**: Copy and store your token securely. Do not share it with anyone.

2. **Export Your GitHub Username and Token**:
   Run the following commands to export your GitHub username and token:
   
   ```bash
   export username="your_github_username"
   export token="your_generated_token"
   ```

### Run the Script

1. **Grant Execute Permissions**: Make the script executable by running:
   ```bash
   chmod 777 list_user.sh
   ```

2. **Execute the Script**: Use the following command to run the script:
   ```bash
   ./list_user.sh <repository_owner> <repository_name>
   ```

For example, if you are checking a repository owned by `ayushsharma-1` and named `Sample-Repo`, the command would look like:
```bash
./list_user.sh ayushsharma-1 Sample-Repo
```

---

## Example

Here’s an example of how to run the script from scratch:

1. SSH into your EC2 instance:
   ```bash
   ssh -i your-keypair.pem ubuntu@<EC2-Instance-IP>
   ```

2. Clone the repository:
   ```bash
   git clone git@github.com:ayushsharma-1/AWS-Amazon-Web-Services-Projects.git
   ```

3. Navigate to the script:
   ```bash
   cd AWS-Amazon-Web-Services-Projects/AWS_GithubAPI
   ```

4. Export your GitHub username and token:
   ```bash
   export username="your_github_username"
   export token="your_generated_token"
   ```

5. Grant execute permissions and run the script:
   ```bash
   chmod 777 list_user.sh
   ./list_user.sh <repository_owner> <repository_name>
   ```

This will display all users with read (pull) access to the specified repository.

---

## Troubleshooting

- Ensure that your GitHub token has the necessary permissions.
- If the script does not return any users, verify that the repository owner and name are correct.
- Use `echo $username` and `echo $token` to confirm that the environment variables are correctly set.

---

## License

This project is open source and licensed under the [MIT License](LICENSE).

