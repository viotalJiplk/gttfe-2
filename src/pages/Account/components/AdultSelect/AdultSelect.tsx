import Row from "../../../../components/form/Row/Row";
import Label from "../../../../components/form/Label/Label";
import React from 'react';
import SelectInput from "../../../../components/form/SelectInput/SelectInput";

interface AdultSelectProps {
    setFunction: Function,
    value: boolean
}

const options = [{value: true, display: 'Ano'}, {value: false, display: 'Ne'}]

const AdultSelect: React.FC<AdultSelectProps> = props => {
    let value = 'Ano';
    if (!props.value) {
        value = 'Ne';
    }
    return <Row>
        <Label>Budete dospělý v době turnaje?</Label>
        <SelectInput value={value} setFunction={props.setFunction} options={options}></SelectInput>
    </Row>
};

export default AdultSelect;