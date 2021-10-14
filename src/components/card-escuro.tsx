import React from 'react';

interface ICardProps{
    tamanho: String
}

export default class CardEscuro extends React.Component<ICardProps, any>{
    constructor(props:ICardProps){
        super(props)
    }

    render(){
        return(
            <div className={" \" " + "rounded-xl md:border border-gray-700 " + this.props.tamanho + " "  + " \" "}>
                <div className="flex flex-col">
                    {this.props.children}
                </div>
            </div>
        )
    }
}