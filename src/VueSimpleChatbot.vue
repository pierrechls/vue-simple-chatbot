<template>
  <div class="vscb-container">
    <div id="vscb-container-body">
        <div :class="viewChatBoxCircle ? 'vscb-chat-circle btn btn-raised open' : 'vscb-chat-circle btn btn-raised close'" @click="showChatBox()">
              <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
      	</div>

        <div :class="viewchatBoxElement ? 'vscb-chat-box open' : 'vscb-chat-box close'">
          <div class="vscb-chat-box-header">
            ChatBot
            <span class="vscb-chat-box-toggle" @click="hideChatBox()"><i class="material-icons">close</i></span>
          </div>
          <div class="vscb-chat-box-body">
            <div class="vscb-chat-box-overlay">
            </div>
            <div class="vscb-chat-logs">
              <div v-for="message in messages" :class="message.isRobot ? 'vscb-chat-msg self' : 'vscb-chat-msg user'"style="">
                <span class="vscb-msg-avatar">
                  <img :src="message.avatar">
                </span>
                <div class="vscb-cm-msg-text">{{ message.text }}</div>
              </div>
            </div>
          </div>
          <div class="vscb-chat-input">
            <form>
              <input v-model="messageInput" type="text" class="vscb-chat-input-element" placeholder="Send a message..."/>
              <button type="button" @click="sendMessage()" class="vscb-chat-submit"><i class="material-icons">send</i></button>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

    export default {
        components: {},
        props: {},
        data (){
            return {
              viewChatBoxCircle: true,
              viewchatBoxElement: false,
              messageInput: '',
              messages: [
                {
                  avatar: "https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745",
                  text: "Hello Pedro",
                  isRobot: true
                },
                {
                  avatar: "https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745",
                  text: "Hi robot",
                  isRobot: false
                }
              ]
            }
        },
        methods: {
          sendMessage: function () {
              if (this.messageInput) {
                this.messages.push({
                  avatar: "https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745",
                  text: this.messageInput,
                  isRobot: false
                })
                this.messageInput = '';
              }
          },
          showChatBox: function () {
              this.viewChatBoxCircle = false
              this.viewchatBoxElement = true
          },
          hideChatBox: function () {
              this.viewChatBoxCircle = true
              this.viewchatBoxElement = false
          },
        },
        mounted () {
        }
    }

</script>

<style lang="scss" scoped>


    .vscb-chat-circle {
        position: fixed;
        bottom: 50px;
        right: 50px;
        background: #435467;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        color: white;
        padding: 15px;
        cursor: pointer;
        box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);

        -webkit-transform : scale(1);
        -moz-transform : scale(1);
        -o-transform : scale(1);
        -ms-transform : scale(1);
        transform : scale(1);

        -webkit-transform-origin : 120% 110%;
        -moz-transform-origin : 120% 110%;
        -o-transform-origin : 120% 110%;
        -ms-transform-origin : 120% 110%;
        transform-origin : 120% 110%;

        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;

        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;

        fill: #fff;
        height: 50px;
        width: 50px;
        z-index: 999;

        &.open {
          transform: scale(1);
        }

        &.close {
          transform: scale(0);
        }

    }

    .vscb-chat-box {
        background: #efefef;
        position:fixed;
        right:30px;
        bottom:50px;
        width:350px;
        max-width: 85vw;
        max-height:100vh;
        border-radius:5px;
        box-shadow: 0px 5px 35px 9px #ccc;

        opacity: 0;

        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;

        &.open {
            opacity: 1;
            -webkit-transform : translateY(-40px);
            -moz-transform : translateY(-40px);
            -o-transform : translateY(-40px);
            -ms-transform : translateY(-40px);
            transform : translateY(-40px);
        }

        &.close {
            opacity: 0;
            -webkit-transform : translateY(0);
            -moz-transform : translateY(0);
            -o-transform : translateY(0);
            -ms-transform : translateY(0);
            transform : translateY(0);
        }
    }

    .vscb-chat-box-toggle {
        float:right;
        margin-right:15px;
        cursor:pointer;
    }

    .vscb-chat-box-header {
        background: #435467;
        height:70px;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        color:white;
        text-align:center;
        font-size:20px;
        padding-top:17px;
    }

    .vscb-chat-box-body {
        position: relative;
        height:370px;
        height:auto;
        border:1px solid #ccc;
        overflow: hidden;
    }

    .vscb-chat-box-body:after {
        content: "";
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgOCkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgY3g9IjE3NiIgY3k9IjEyIiByPSI0Ii8+PHBhdGggZD0iTTIwLjUuNWwyMyAxMW0tMjkgODRsLTMuNzkgMTAuMzc3TTI3LjAzNyAxMzEuNGw1Ljg5OCAyLjIwMy0zLjQ2IDUuOTQ3IDYuMDcyIDIuMzkyLTMuOTMzIDUuNzU4bTEyOC43MzMgMzUuMzdsLjY5My05LjMxNiAxMC4yOTIuMDUyLjQxNi05LjIyMiA5LjI3NC4zMzJNLjUgNDguNXM2LjEzMSA2LjQxMyA2Ljg0NyAxNC44MDVjLjcxNSA4LjM5My0yLjUyIDE0LjgwNi0yLjUyIDE0LjgwNk0xMjQuNTU1IDkwcy03LjQ0NCAwLTEzLjY3IDYuMTkyYy02LjIyNyA2LjE5Mi00LjgzOCAxMi4wMTItNC44MzggMTIuMDEybTIuMjQgNjguNjI2cy00LjAyNi05LjAyNS0xOC4xNDUtOS4wMjUtMTguMTQ1IDUuNy0xOC4xNDUgNS43IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTg1LjcxNiAzNi4xNDZsNS4yNDMtOS41MjFoMTEuMDkzbDUuNDE2IDkuNTIxLTUuNDEgOS4xODVIOTAuOTUzbC01LjIzNy05LjE4NXptNjMuOTA5IDE1LjQ3OWgxMC43NXYxMC43NWgtMTAuNzV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjcxLjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjE3MC41IiBjeT0iOTUuNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjMDAwIiBjeD0iODEuNSIgY3k9IjEzNC41IiByPSIxLjUiLz48Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIxMy41IiBjeT0iMjMuNSIgcj0iMS41Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTkzIDcxaDN2M2gtM3ptMzMgODRoM3YzaC0zem0tODUgMThoM3YzaC0zeiIvPjxwYXRoIGQ9Ik0zOS4zODQgNTEuMTIybDUuNzU4LTQuNDU0IDYuNDUzIDQuMjA1LTIuMjk0IDcuMzYzaC03Ljc5bC0yLjEyNy03LjExNHpNMTMwLjE5NSA0LjAzbDEzLjgzIDUuMDYyLTEwLjA5IDcuMDQ4LTMuNzQtMTIuMTF6bS04MyA5NWwxNC44MyA1LjQyOS0xMC44MiA3LjU1Ny00LjAxLTEyLjk4N3pNNS4yMTMgMTYxLjQ5NWwxMS4zMjggMjAuODk3TDIuMjY1IDE4MGwyLjk0OC0xOC41MDV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxwYXRoIGQ9Ik0xNDkuMDUgMTI3LjQ2OHMtLjUxIDIuMTgzLjk5NSAzLjM2NmMxLjU2IDEuMjI2IDguNjQyLTEuODk1IDMuOTY3LTcuNzg1LTIuMzY3LTIuNDc3LTYuNS0zLjIyNi05LjMzIDAtNS4yMDggNS45MzYgMCAxNy41MSAxMS42MSAxMy43MyAxMi40NTgtNi4yNTcgNS42MzMtMjEuNjU2LTUuMDczLTIyLjY1NC02LjYwMi0uNjA2LTE0LjA0MyAxLjc1Ni0xNi4xNTcgMTAuMjY4LTEuNzE4IDYuOTIgMS41ODQgMTcuMzg3IDEyLjQ1IDIwLjQ3NiAxMC44NjYgMy4wOSAxOS4zMzEtNC4zMSAxOS4zMzEtNC4zMSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L3N2Zz4=');
        opacity: 0.1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height:100%;
        position: absolute;
        z-index: -1;
    }

    .vscb-chat-input-element {
        background: #f4f7f9;
        width:100%;
        position:relative;
        height:47px;
        padding-top:10px;
        padding-right:50px;
        padding-bottom:10px;
        padding-left:15px;
        border:none;
        resize:none;
        outline:none;
        border:1px solid #ccc;
        color:#888;
        border-top:none;
        border-bottom-right-radius:5px;
        border-bottom-left-radius:5px;
        overflow:hidden;
    }

    .vscb-chat-input > form {
        margin-bottom: 0;
    }

    .vscb-chat-input-element::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #ccc;
    }

    .vscb-chat-input-element::-moz-placeholder { /* Firefox 19+ */
        color: #ccc;
    }
    .vscb-chat-input-element:-ms-input-placeholder { /* IE 10+ */
        color: #ccc;
    }
    .vscb-chat-input-element:-moz-placeholder { /* Firefox 18- */
        color: #ccc;
    }
    .vscb-chat-submit {
        position:absolute;
        bottom:3px;
        right:10px;
        background: transparent;
        box-shadow:none;
        border:none;
        border-radius:50%;
        color:#435467;
        width:35px;
        height:35px;
    }

    .vscb-chat-logs {
        padding:15px;
        height:370px;
        overflow-y:scroll;
    }

    .vscb-chat-logs::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }

    .vscb-chat-logs::-webkit-scrollbar {
        width: 5px;
        background-color: #F5F5F5;
    }

    .vscb-chat-logs::-webkit-scrollbar-thumb {
        background-color: #435467;
    }



    @media only screen and (max-width: 500px) {
       .vscb-chat-logs {
            height:40vh;
        }
    }

    .vscb-chat-msg.user > .vscb-msg-avatar img {
        width:45px;
        height:45px;
        border-radius:50%;
        float:left;
        width:15%;
    }

    .vscb-chat-msg.self > .vscb-msg-avatar img {
        width:45px;
        height:45px;
        border-radius:50%;
        float:right;
        width:15%;
    }

    .vscb-cm-msg-text {
        background:white;
        padding:10px 15px 10px 15px;
        color:#666;
        max-width:75%;
        float:left;
        margin-left:10px;
        position:relative;
        margin-bottom:20px;
        border-radius:30px;
    }

    .vscb-chat-msg {
        clear:both;
    }

    .vscb-chat-msg.self > .vscb-cm-msg-text {
        float:right;
        margin-right:10px;
        background: #435467;
        color:white;
    }

    .vscb-cm-msg-button>ul>li {
        list-style:none;
        float:left;
        width:50%;
    }

    .vscb-cm-msg-button {
      clear: both;
      margin-bottom: 70px;
    }

</style>
