import React from 'react';
import { Divider, Header, Table } from 'semantic-ui-react';

function ProductAttributes({description, ...otherAtributes}) {
    return ( 
        <section>
            <Header as='h3'>About this avocado</Header>
            <p>{description}</p>
            <Divider/>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="2">
                            Attributes
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {Object.keys(otherAtributes).map(
                        (key) => (
                            <Table.Row key={key}>
                                <Table.Cell>
                                    {key}
                                </Table.Cell>
                                <Table.Cell>
                                    {otherAtributes[key]}
                                </Table.Cell>
                            </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </section>
    );
}

export default ProductAttributes;