import React, { Component } from "react";
import stickers from './stickers.json'
import { List, ListImg, ListName } from "./StickersList.styled";

export default class FruitList extends Component {
    state = {
        stick: stickers,
    }
    showName = (isShow, id) => {
        this.setState((prevState) => {
            const newIsShow = prevState.stick.filter(stick => stick.isShow !== isShow)
            const newState = [...prevState, ...newIsShow]
            return { stickers: newState }
        })
    }
    render() {
        const { stick } = this.state
        return (
            <>
                <List>
                    {stick.map(({ id, name, src, isShow }) =>
                        <li key={id}>
                            <ListName>{name}</ListName>
                            <ListImg onClick={(id, isShow) => { console.log(this.showName(isShow, id)) }} src={src} alt="image" />
                        </li>
                    )}
                </List>
            </>
        )
    }
}