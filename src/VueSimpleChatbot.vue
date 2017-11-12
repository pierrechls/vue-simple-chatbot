<template>
  <div class="vscb-container">
    <div class="vscb-container-body">
        <div :class="viewChatBoxCircle ? 'vscb-chat-circle open' : 'vscb-chat-circle close'" @click="showChatBox()">
              <message-svg color="#FFF"></message-svg>
        </div>

        <div :class="viewchatBoxElement ? 'vscb-chat-box open' : 'vscb-chat-box close'">
          <div class="vscb-chat-box-header">
            ChatBot
            <span class="vscb-chat-box-toggle" @click="hideChatBox()">
                <cross-svg color="#FFF"></cross-svg>
            </span>
          </div>
          <div class="vscb-chat-box-body">
            <div class="vscb-chat-logs">
              <div v-for="message in messages" :class="message.isRobot ? 'vscb-chat-msg self' : 'vscb-chat-msg user'"style="">
                <span class="vscb-msg-avatar">
                  <img :src="message.avatar">
                </span>
                <!-- <div class="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div> -->
                <div class="vscb-cm-msg-text">{{ message.text }}</div>
              </div>
            </div>
          </div>
          <div class="vscb-chat-input">
            <form @submit.prevent="sendMessage">
              <input v-model="messageInput" type="text" class="vscb-chat-input-element" placeholder="Send a message..." @keyup.enter="sendMessage"/>
              <button type="button" @click="sendMessage()" class="vscb-chat-submit">
                  <send-svg color="#A2A3A4"></send-svg>
              </button>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

    import CrossSvg from 'components/Svg/CrossSvgComponent.vue'
    import MessageSvg from 'components/Svg/MessageSvgComponent.vue'
    import SendSvg from 'components/Svg/SendSvgComponent.vue'

    export default {
        components: {
          'send-svg': SendSvg,
          'cross-svg': CrossSvg,
          'message-svg': MessageSvg
        },
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

    .vscb-container {

      .vscb-container-body {

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

            .vscb-chat-box-header {
                background: #435467;
                height:70px;
                border-top-left-radius:5px;
                border-top-right-radius:5px;
                color:white;
                text-align:center;
                font-size:20px;
                padding-top:17px;

                .vscb-chat-box-toggle {
                    float:right;
                    margin-right:15px;
                    cursor:pointer;
                }
            }

            .vscb-chat-box-body {
                position: relative;
                height:370px;
                height:auto;
                border:1px solid #ccc;
                overflow: hidden;

                &:after {
                    content: '';
                    opacity: 0.1;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    height:100%;
                    position: absolute;
                    z-index: -1;
                }

                .vscb-chat-logs {
                    padding:15px;
                    height:370px;
                    overflow-y:scroll;

                    &::-webkit-scrollbar-track {
                        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                        background-color: #F5F5F5;
                    }

                    &::-webkit-scrollbar {
                        width: 5px;
                        background-color: #F5F5F5;
                    }

                    &::-webkit-scrollbar-thumb {
                        background-color: #435467;
                    }

                    .vscb-chat-msg {

                        clear:both;

                        .typing-indicator {
                            background-color: #E6E7ED;
                            will-change: transform;
                            width: auto;
                            border-radius: 50px;
                            padding: 10px;
                            display: table;
                            float: right;
                            margin: 0 20px 0 auto;
                            position: relative;
                            animation: 2s bulge infinite ease-out;

                            &::before, &::after {
                                content: '';
                                position: absolute;
                                bottom: -2px;
                                right: -2px;
                                height: 10px;
                                width: 10px;
                                border-radius: 50%;
                                background-color: #E6E7ED;
                            }

                            &::after {
                                height: 10px;
                                width: 10px;
                                right: -10px;
                                bottom: -10px;
                            }

                            span {
                                height: 10px;
                                width: 10px;
                                float: left;
                                margin: 0 1px;
                                background-color: #9E9EA1;
                                display: block;
                                border-radius: 50%;
                                opacity: 0.4;
                                @for $i from 1 through 3 {
                                  &:nth-of-type(#{$i}) {
                                    animation: 1s blink infinite ($i * .3333s);
                                  }
                                }
                            }
                        }

                        @keyframes blink {
                          50% {
                            opacity: 1;
                          }
                        }

                        @keyframes bulge {
                          50% {
                            transform: scale(1.05);
                          }
                        }

                        &.user > .vscb-msg-avatar img, &.self > .vscb-msg-avatar img {
                          width:45px;
                          height:45px;
                          border-radius:50%;
                          width:15%;
                        }

                        &.user > .vscb-msg-avatar img {
                            float:left;
                        }

                        &.self > .vscb-msg-avatar img {
                            float:right;
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

                        &.self > .vscb-cm-msg-text {
                            float:right;
                            margin-right:10px;
                            background: #435467;
                            color:white;
                        }
                    }

                    @media only screen and (max-width: 500px) {
                        & {
                            height:40vh;
                        }
                    }
                }

            }

            .vscb-chat-input {

              & > form {
                margin-bottom: 0;

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

                    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                        color: #ccc;
                    }

                    &::-moz-placeholder { /* Firefox 19+ */
                        color: #ccc;
                    }
                    &:-ms-input-placeholder { /* IE 10+ */
                        color: #ccc;
                    }
                    &:-moz-placeholder { /* Firefox 18- */
                        color: #ccc;
                    }

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

              }
            }

        }
      }
    }

</style>
