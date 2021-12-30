import { Avatar, Comment } from "antd";
import { GistProps } from "../../../utils/interface";
import { Heading } from "../heading/Heading";
import { Paragraph } from "../paragraph/Paragraph";

interface IProps {
  content?: GistProps;
}
export const UserIntro = ({ content }: IProps) => {
  return (
    <>
      <Comment
        author={
          <Heading color="blue" size="medium">
            {content?.filename}
          </Heading>
        }
        avatar={
          <Avatar
            src={
              content?.gistImg
                ? content.gistImg
                : "https://joeschmoe.io/api/v1/random"
            }
            alt="User provided gist image"
          />
        }
        content={<Paragraph>{content?.desc}</Paragraph>}
      />
    </>
  );
};
