import LoginGithub from "react-login-github";
import { Card } from "antd";
import { useHistory } from "react-router";
import { Div } from "../../components/common/div/Div";
import { Heading } from "../../components/common/heading/Heading";
import { Button } from "../../components/common/button/Button";
import { Paragraph } from "../../components/common/paragraph/Paragraph";

export const Login = () => {
  const history = useHistory();
  const onSuccess = (response) => {
    console.log("response from login", response);

    sessionStorage.setItem("login", JSON.stringify(response));
    history.push("/");
  };
  const onFailure = (response) => console.error(response);
  return (
    <>
      <Card>
        <Div align="center" justify="center" direction="column" gap="10px">
          <Heading> Login using github</Heading>
          <br />
          <LoginGithub
            clientId="9e895547ed6f620be4f5"
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText={<Paragraph>Login with github</Paragraph>}
          />
        </Div>
      </Card>
    </>
  );
};
