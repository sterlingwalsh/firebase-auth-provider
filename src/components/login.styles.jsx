import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border-radius: 0.5rem;
  border: 1px solid lightgray;
  padding: 0.5rem;
  margin: 0.25rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin: 0.25rem;
  background: rgb(29, 161, 242);
  color: white;
`;
