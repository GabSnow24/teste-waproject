import React from 'react';

interface ISelectProps{
    name: any
    options: any
}

export default class SelectCustom extends React.Component<ISelectProps, any>{
    constructor(props:ISelectProps){
        super(props)
    }

    render(){
        return(
            <div className="flex flex-col">
                <select required name={this.props.name} className="text-white md:text-blue-600 transparent-background border border-white md:border-blue-600 rounded-full font-custom text-md mb-5 p-2 pl-5">
                    {this.props.options.map((option: any, index: any) => <option key={index} value={option} className="text-blue-600 bg-gray-200"> {option} </option>)}
                </select>
            </div>
        )
    }
}