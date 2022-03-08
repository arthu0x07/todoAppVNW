// https://color.adobe.com/pt/explore
// https://unsplash.com/t/textures-patterns

// Preciso ter um formulário com um input e um botão.
// Preciso ter um container para renderizar a lista
import styled from "styled-components";
import React, { useState } from "react";

import iconButton from "../../Assets/Images/submitIcon.png";
import iconButtonDelete from "../../Assets/Images/deleteIcon.png";

const Container = styled.div`
  min-width: 320px;
  max-width: 520px;
  height: auto;
  min-height: 500px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 3px solid #22222250;
  box-shadow: 14px 10px 80px 20px #f2f2f278;
  border-radius: 1px;
  backdrop-filter: blur(10px);
  margin: 0 auto;
  margin-top: 15vh;

  padding: 2px;
`;

// Fazer um conteiner englobando o input e botão
const ContainerForms = styled.form`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputTask = styled.input`
  width: 80%;
  height: 40px;
  font-size: 18px;
  background-color: transparent;
  border: 2px solid #f2f2f220;
  padding: 20px 10px;
  padding-right: 2px;
  color: #f2f2f2;
  outline: 0 !important;
  font-family: "Fredoka";
  margin-right: 2px;
  border-radius: 2px;

  caret-color: #999999;
`;

const ButtonAddTask = styled.button`
  cursor: pointer;
  height: 46px;
  font-size: 18px;
  color: #f2f2f2;
  font-family: "Fredoka";
  padding: 10px;
  background-color: transparent;
  margin-left: 6px;
  border: 0px;
  text-align: center;
  background-color: #f2f2f230;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2px;

  position: relative;
  z-index: 1;
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    left: -100%;
    z-index: 0;

    transition: 1s ease;
  }

  :hover {
    :before {
      left: 0%;
    }
  }

  img {
    position: relative;
    z-index: 2;
  }
`;

const ContainerListTask = styled.ul`
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top: 3rem;
  min-height: 80px;
`;

const Task = styled.li`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }

  :hover {
    p {
      color: #f2f2f2;
    }
  }

  p {
    width: 80%;
    font-size: 2.4rem;
    color: #f2f2f240;
    font-family: "Prompt";
    transition: 1s ease;
  }

  img {
  }
`;

const ButtonDelete = styled.button`
  cursor: pointer;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 46px;
  padding: 10px;
  margin-left: 2px;
  border-radius: 2px;
  background-color: #f2f2f230;

  position: relative;
  z-index: 1;
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    top: -100%;
    z-index: 0;

    transition: 1s ease;
  }

  :hover {
    :before {
      top: 0%;
    }
  }

  img {
    position: relative;
    z-index: 1;
  }
`;

export function Home() {
  const [ActualTaskName, SetActualTaskName] = useState("");

  return (
    <Container>
      <ContainerForms>
        <InputTask
          type="text"
          value={ActualTaskName}
          onChange={(e) => {
            SetActualTaskName(e.target.value);
          }}
        />
        <ButtonAddTask>
          <img src={iconButton} alt="Icone de enviar tarefa" />
        </ButtonAddTask>
      </ContainerForms>

      <ContainerListTask>
        <Task>
          <p>Entregar livro</p>

          <ButtonDelete>
            <img src={iconButtonDelete} alt="Botão de exclusão de tarefa" />
          </ButtonDelete>
        </Task>

        <Task>
          <p>Entregar livro</p>

          <ButtonDelete>
            <img src={iconButtonDelete} alt="Botão de exclusão de tarefa" />
          </ButtonDelete>
        </Task>
      </ContainerListTask>
    </Container>
  );
}
