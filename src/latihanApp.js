import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Title from "./components/Title";

const App = () => {

  // let
  let title = "Belajar React";
  title = "Belajar Js";

  // const
  const description = "Tutorial React";

  // function = regular function
  function showHello() {
    const sum = 1 + 2;
    return "Hello World " + sum;
  };

  // function = arrow function
  const showHello2 = () => {
    return "Hello form renaldi";
  };

  const testParams = (params) => {
    return params;
  };

  const alertTitle = () => {
    console.log("Hello from parent");
  };

  const profile = {
    id: 1,
    name: "Renaldi",
    location: "Indonesia"
  };

  const profiles = [
    {
      id: 1,
      name: "Renaldi",
      location: "Indonesia"
    },
    {
      id: 2,
      name: "Aldi",
      location: "Indonesia"
    },
    {
      id: 3,
      name: "Andi",
      location: "Indonesia"
    },
  ];

  const isShow = false;

  return (
    <div>

      {isShow ? <h1>Hallo, this is from rendering conditional</h1> : <h1>No True</h1>}
      <Header />
      <Title title={title} alertTitle={alertTitle} profile={profile} profiles={profiles} />
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h2>{showHello()}</h2>
      <h2>{showHello2()}</h2>
      <h2>{testParams("Ini adalah Params")}</h2>
      <Content>
        <h1>Ini adalah app</h1>
        <h1>Ini adalah app</h1>
      </Content>
      <Footer />
    </div>
  )
}

export default App;