import { SearchOutlined } from "@ant-design/icons";
import { Row, Layout, Col, Dropdown, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import emumbaLogo from "../../assets/emumbaLogo.png";
import { useGistContext } from "../../context/AppContext";
import { searchGist } from "../../utils/gist";
import { GistProps } from "../../utils/interface";
import { Button } from "../common/button/Button";
import { Div } from "../common/div/Div";
import { Input } from "../common/input/Input";
const { Header } = Layout;

const Navbar = () => {
  const history = useHistory();
  const [value, setValue] = useState<number>(0);
  const { state, dispatch } = useGistContext();

  useEffect(() => {
    let loginItem = sessionStorage.getItem("login");
    if (loginItem) {
      let isLogin = JSON.parse(loginItem);
      if (isLogin && isLogin.code) dispatch({ type: "LOGIN", payload: true });
    }
  }, []);
  const logout = () => {
    sessionStorage.removeItem("login");
    dispatch({ type: "LOGOUT", payload: false });
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/create-gist">Create Gist</Link>
      </Menu.Item>
      <Menu.Item onClick={logout}>
        <Link to="/">Logout</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile"> User Profile</Link>
      </Menu.Item>
    </Menu>
  );
  const handleLogin = () => {
    history.push("/login");
  };

  const handleSearch = () => {
    let searchedResults: GistProps[] = searchGist(value) || [];
    dispatch({
      type: "SEARCH_GIST",
      payload: searchedResults,
    });
  };
  return (
    <>
      <Header>
        <Row>
          <Col xs={{ span: 8 }} md={{ span: 12 }}>
            <Link to="/">
              <img
                src={emumbaLogo}
                alt="company emumba logo"
                width={180}
                height={30}
              />
            </Link>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Div
              align="end"
              justify="end"
              direction="row"
              gap="10px"
              padding="2%"
            >
              <Input
                placeholder="Search"
                width="50%"
                bgcolor="white"
                suffix={
                  <SearchOutlined
                    style={{ color: "black" }}
                    onClick={handleSearch}
                  />
                }
                name="gistId"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setValue(parseInt(e.target.value))
                }
              />
              {state.isAuthenticated ? (
                <Dropdown overlay={menu} placement="bottomCenter">
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Han Solo"
                  />
                </Dropdown>
              ) : (
                <Button
                  title="Login"
                  bgColor="white"
                  color="black"
                  bordercolor="transparent"
                  handleClick={handleLogin}
                ></Button>
              )}
            </Div>
          </Col>
        </Row>
      </Header>
    </>
  );
};
export default React.memo(Navbar);
