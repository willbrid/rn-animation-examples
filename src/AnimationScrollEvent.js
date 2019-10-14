import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Animated } from 'react-native';

class AnimationScrollEvent extends Component {
    state = {
        animation: new Animated.Value(0)
    }

    render() {
        const { animation } = this.state;
        
        const backgroundInterpolate = animation.interpolate({
            inputRange: [0, 3000],
            outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
        });
        const backgroundStyle = {
            backgroundColor: backgroundInterpolate
        };

        return (
            <View style={styles.container}>
                <ScrollView
                    scrollEventThrottle={16}
                    /* onScroll={(e) => {
                        animation.setValue(e.nativeEvent.contentOffset.y)
                    }} */
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: animation
                                }
                            }
                        }
                    ])}
                >
                    <Animated.View style={[styles.content, backgroundStyle]} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        height: 3000
    }
});

export default AnimationScrollEvent;