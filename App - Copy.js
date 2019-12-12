import React from 'react';
import { Button, Text, View, ScrollView, Image } from 'react-native';
import ProfileImage from "./walle.jpg";
import { Icon } from 'react-native-elements';
import { Ionicons } from "@expo/vector-icons";

import Photo1 from "./walle1.jpg";
import Photo2 from "./walle2.jpg";
import Photo3 from "./walle3.jpg";
import Photo4 from "./walle4.jpg";
import Photo5 from "./walle5.jpg";
import Photo6 from "./walle6.jpg";
import Photo7 from "./walle7.jpg";


class App extends React.Component {
  render() {
    return (
      <View
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          color: "white",
          fontSize: 50
        }}
      >
        <View
          style={{
            elevation: 5,
            paddingTop: 25,
            height: 300,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#66bb6a"

          }}
        >
          <View style={{
            marginTop: 15,
            display: "flex",
            flexDirection: "row"
          }}>
            <View style={{ marginLeft: 15 }}>
              <Icon
                name='ios-menu'
                type='ionicon'
                color='white'
                size={25}
              />
            </View>
            <Text style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              marginLeft: 20,
              flex: 1
            }}>
              Profile
          </Text>
            <Icon
              name='search' f
              type='evilicon'
              color='white'
              size={28}
            />
            <View style={{ marginLeft: 20, marginRight: 15 }}>
              <Ionicons
                name='md-more'
                color='white' size={25} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              margin: 40
            }}>
            <Profile />
          </View>
          <Text style={{
            fontSize: 20,
            color: "white",
            marginBottom: 10,
            fontWeight: "bold"
          }}>
            KevinAS28
            </Text>
          <Text style={{
            fontSize: 15,
            color: "white",
            marginBottom: 10
          }}>
            Mathematician
          </Text>
        </View>
        <View
          style={{
            elevation: 8,
            display: "flex",
            flexDirection: "row",
            height: 58,
            backgroundColor: "#ececec"
          }}
        >
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              729
           </Text>
            <Text style={{ color: "grey" }}>
              Posts
           </Text>
          </View>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              500k
           </Text>
            <Text style={{ color: "grey" }}>
              Followers
           </Text>
          </View>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              0
           </Text>
            <Text style={{ color: "grey" }}>
              Following
           </Text>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{
              margin: 10
            }}>
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 15 }}>
                Photos
      </Text>

              <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View
                    style={{
                      marginTop: 10,
                      elevation: 5,
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: "white"
                    }}
                  >
                    <View
                      style={{
                        width: 75,
                        height: 75
                      }}>
                      <Image source={Photo1} style={{ width: 75, height: 75 }} />
                    </View>
                    <View
                      style={{
                        width: 75,
                        height: 75,
                        marginLeft: 5
                      }}>
                      <Image source={Photo2} style={{ width: 75, height: 75 }} />
                    </View>
                    <View
                      style={{
                        width: 75,
                        height: 75,
                        marginLeft: 5
                      }}>
                      <Image source={Photo3} style={{ width: 75, height: 75 }} />
                    </View>
                    <View
                      style={{
                        width: 75,
                        height: 75,
                        marginLeft: 5
                      }}>
                      <Image source={Photo4} style={{ width: 75, height: 75 }} />
                    </View>
                    <View
                      style={{
                        width: 75,
                        height: 75,
                        marginLeft: 5
                      }}>
                      <Image source={Photo5} style={{ width: 75, height: 75 }} />
                    </View>

                  </View>
                </ScrollView>
              </View>


            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginTop: 15,
                margin: 10
              }}>
              Post
        </Text>
            <Post />
            <Text style={{ margin: 10 }}>She is beautiful </Text>
            <Image source={Photo7} style={{ width: 355, height: 300, marginLeft: 10 }} />
            <Post />
            <Text style={{ margin: 10 }}>HELLO WORLD </Text>
            <Image source={Photo6} style={{ width: 355, height: 300, marginLeft: 10 }} />

          </ScrollView>

        </View>
      </View>
    );
  }
}

function Profile() {
  return (
    <View
      style={{
        margin: 5,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        padding: 5,
        borderRadius: 60
      }}
    >
      <View
        style={{
          width: 100,
          height: 100
        }}
      >
        <Image source={ProfileImage} style={{ width: 100, height: 100, borderRadius: 50 }} />
      </View>

    </View>
  )
}


function Post() {
  return (
    <View
      style={{
        elevation: 5,
        display: "flex",
        flexDirection: "row",
        margin:10
      }}
    >
      <View
        style={{
        }}
      >
        <Image source={ProfileImage} style={{ width: 50, height: 50 }} />
      </View>
      <View style={{flex:1,flexDirection:'column', justifyContent:'center', paddingLeft:8}}>
        <Text style={{ fontSize: 15, color: "#24248f", fontWeight: "bold" }}>KevinAS28</Text>
        <View style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <Icon
            name='ios-calendar'
            type='ionicon'
            color='grey'
            size={15}

          />
          <Text style={{ fontSize: 12, color: "grey", marginLeft: 8 }}>25 minutes ago</Text>
        </View>
      </View>
    </View>
  );
}



function Post2() {
  return (
    <View
      style={{
        elevation: 5,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 15
      }}
    >
      <View
        style={{
          marginLeft: 10,
          width: 65,
          height: 65
        }}
      >
        <Image source={ProfileImage} style={{ width: 50, height: 50 }} />
      </View>
      <View>
        <Text style={{ fontSize: 15, color: "#24248f", fontWeight: "bold" }}>KevinAS28</Text>
        <View style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <Icon
            name='ios-calendar'
            type='ionicon'
            color='grey'
            size={15}

          />
          <Text style={{ fontSize: 12, color: "grey", marginLeft: 8 }}>1 hour ago</Text>
        </View>
      </View>
    </View>
  );
}

function Post3() {
  return (
    <View
      style={{
        elevation: 5,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 15
      }}
    >
      <View
        style={{
          marginLeft: 10,
          width: 65,
          height: 65
        }}
      >
        <Image source={ProfileImage} style={{ width: 50, height: 50 }} />
      </View>
      <View>
        <Text style={{ fontSize: 15, color: "#24248f", fontWeight: "bold" }}>KevinAS28</Text>
        <View style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <Icon
            name='ios-calendar'
            type='ionicon'
            color='grey'
            size={15}

          />
          <Text style={{ fontSize: 12, color: "grey", marginLeft: 8 }}>23 hour ago</Text>
        </View>
      </View>
    </View>
  );
}

function Post4() {
  return (
    <View
      style={{
        elevation: 5,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 15
      }}
    >
      <View
        style={{
          marginLeft: 10,
          width: 65,
          height: 65
        }}
      >
        <Image source={ProfileImage} style={{ width: 50, height: 50 }} />
      </View>
      <View>
        <Text style={{ fontSize: 15, color: "#24248f", fontWeight: "bold" }}>KevinAS28</Text>
        <View style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <Icon
            name='ios-calendar'
            type='ionicon'
            color='grey'
            size={15}

          />
          <Text style={{ fontSize: 12, color: "grey", marginLeft: 8 }}>3 weeks ago</Text>
        </View>
      </View>
    </View>
  );
}

function Post5() {
  return (
    <View
      style={{
        elevation: 5,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 15
      }}
    >
      <View
        style={{
          marginLeft: 10,
          width: 65,
          height: 65
        }}
      >
        <Image source={ProfileImage} style={{ width: 50, height: 50 }} />
      </View>
      <View>
        <Text style={{ fontSize: 15, color: "#24248f", fontWeight: "bold" }}>KevinAS28</Text>
        <View style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <Icon
            name='ios-calendar'
            type='ionicon'
            color='grey'
            size={15}

          />
          <Text style={{ fontSize: 12, color: "grey", marginLeft: 8 }}>2 month ago</Text>
        </View>
      </View>
    </View>
  );
}
export default App;
