import { SNSClient, PublishCommand, SNSServiceException } from "@aws-sdk/client-sns";

const client = new SNSClient({
    region:process.env.AWS_REGION!,
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY!,
        secretAccessKey:process.env.AWS_SECRET_KEY!
    }
});

export const sendEmail = async () => {
const requestMessage = `confirmation email`;

const command = new PublishCommand({
   TopicArn: process.env.AWS_SNS_TOPIC!,
   Subject: "Successfully created a new task",
   Message: requestMessage,
});

const response = await client.send(command);
return response;
};

