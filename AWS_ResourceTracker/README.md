Sure! Here's a **basic structure** for the README file that will guide users on how to set up and run your AWS resource tracking script, starting with connecting via SSH to an AWS EC2 instance.

---

# AWS Resource Tracker Script

This script reports various AWS resource usages such as:
- S3 Buckets
- EC2 Instances
- Lambda Functions
- IAM Users

## Prerequisites

1. **AWS CLI**: The AWS Command Line Interface must be installed and configured with proper permissions to list resources. You can install it by following [AWS CLI Installation Instructions](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).
   
2. **jq**: The `jq` tool is needed for parsing JSON output in the script. Install it using:
   ```bash
   sudo apt-get install jq
   ```

3. **Bash**: This script is written in Bash and should be run on a Unix-based environment (Linux or macOS).

4. **SSH Access**: You will need access to your AWS EC2 instance via SSH to execute the script.

## Connecting to an AWS EC2 Instance via SSH

Follow these steps to connect to your EC2 instance:

1. **Ensure SSH Key**: Make sure you have the `.pem` key file for your EC2 instance. It should have been downloaded when you launched the instance.

2. **Connect via SSH**: Use the following command to connect to your AWS EC2 instance using SSH:
   ```bash
   ssh -i /path/to/your-key.pem ubuntu@ec2-instance-public-ip
   ```

   - Replace `/path/to/your-key.pem` with the full path to your `.pem` file.
   - Replace `ec2-instance-public-ip` with the public IP address of your EC2 instance.

   Example:
   ```bash
   ssh -i ~/Downloads/my-aws-key.pem ubuntu@18.222.33.44
   ```

3. **Set Permissions**: If you encounter permission issues, ensure your `.pem` file has the correct permissions:
   ```bash
   chmod 400 /path/to/your-key.pem
   ```

## Script Setup and Execution

### 1. Clone the Repository or Upload the Script

You can either clone the repository or upload the script manually.

#### Option 1: Clone from GitHub (If the script is hosted on GitHub)

```bash
git clone git@github.com:ayushsharma-1/AWS-Amazon-Web-Services-Projects.git
cd AWS_ResourceTracker  
```

#### Option 2: Upload Script Manually
You can upload the `aws_resource_tracker.sh` script manually to your EC2 instance using an SCP command:

```bash
scp -i /path/to/your-key.pem aws_resource_tracker.sh ubuntu@ec2-instance-public-ip:/home/ubuntu/
```

### 2. Set Execute Permissions for the Script

Make sure the script has execute permissions. Run the following command:

```bash
chmod +x aws_resource_tracker.sh
```

### 3. Run the Script

Execute the script to retrieve the list of AWS resources:

```bash
./aws_resource_tracker.sh
```

This will output information like S3 bucket lists, EC2 instances, Lambda functions, and IAM users. It will store the results in the `resourceTracker.txt` file.

## Output

The script will create (or update) a `resourceTracker.txt` file in the same directory. The file will include:
- S3 Bucket List
- EC2 Running Instances
- Lambda Functions
- IAM Users
- EC2 Instance IDs (filtered by jq)

You can view the file with:
```bash
cat resourceTracker.txt
```

## Example Use Case

Use this script if you want to monitor your AWS resources quickly without logging into the AWS Management Console. By automating AWS resource tracking, you can easily audit what services are currently being utilized.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

