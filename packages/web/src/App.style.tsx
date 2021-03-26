import styled, { css } from "styled-components";

export const PageContent = styled.div`
  background-color: #4d426d;
  box-sizing: border-box;
  display: grid;
  min-height: 100vh;
  padding: 15px;
  place-content: center;
`;

export const Chat = styled.div`
  background-color: #5c4f82;
  border-radius: 12px;
  box-sizing: border-box;
  display: grid;
  gap: 30px;
  max-width: 600px;
  padding: 14px 0 14px 14px;
  width: 100%;
`;

export const ChatContent = styled.ul`
  display: grid;
  list-style: none;
  margin: 0;
  max-height: 400px;
  overflow: auto;
  padding: 0;
  padding-right: 7px;
  row-gap: 12px;
  margin-right: 7px;

  &::-webkit-scrollbar {
    width: 7px;
    height: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.55);
    border-radius: 10px;
  }
`;

export const ChatFooter = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 50px;
  padding-right: 14px;
`;

type ChatRowProps = {
  hasImage: boolean;
  isMyUser: boolean;
}

export const ChatRow = styled.li<ChatRowProps>`
  align-items: flex-start;
  column-gap: 8px;
  display: grid;
  grid-template-columns: ${({ hasImage, isMyUser }) => {
    if (hasImage) {
      if (isMyUser) {
        return "max-content 50px";
      }
      return "50px max-content";
    }
    return "auto"
  }};
  ${({ hasImage }) => !hasImage && css`margin-left: 58px;`}
  ${({ hasImage, isMyUser }) => !hasImage && isMyUser && css`margin-right: 58px;`}
  ${({ hasImage, isMyUser }) => ((hasImage && isMyUser) || isMyUser) && css`justify-content: flex-end;`}
`;

export const ChatUserInfo = styled.div`
  display: grid;
  gap: 6px;
`;

export const ChatUserImage = styled.img`
  border-radius: 50%;
`;

export const ChatUserTime = styled.p`
  color: #fff;
  font-size: 12px;
  margin: 0;
  text-align: center;
`;

type ChatTextProps = {
  isMyUser: boolean;
};

export const ChatText = styled.p<ChatTextProps>`
  align-items: center;
  background-color: ${({ isMyUser }) => isMyUser ? '#efa985' : '#4d426d' };
  border-radius: 12px;
  color: #fff;
  display: flex;
  font-size: 14px;
  margin: 0;
  min-height: 40px;
  padding: 16px 12px;
  ${({ isMyUser }) => isMyUser && css`grid-row: 1;`}
`;

export const ChatButton = styled.button`
  background-color: #3cc6b7;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: grid;
  place-content: center;
`;

export const ChatInput = styled.input`
  border-radius: 30px;
  border: none;
  font-size: 14px;
  padding: 16px 16px;
  outline: none;
`;
