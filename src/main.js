import formform from 'formform';
import D3Form from './d3Form';

// ===================================================================
//     formform module 'form-svg'
//     -- since 2018, by Peter Hofmann (formsandlines.eu)
// ===================================================================

export default function draw (graphType, _form, options={}) {
    const addEmptyReChildSpace = (graphType === 'pack');

    // expand re-entry structure to be usable for graphs
    const form = formform.form.expand_reEntry(_form, {addEmptyReChildSpace: addEmptyReChildSpace});
    // initialize the graph

    const graph = new D3Form(graphType, form, options);
    graph.formula = _form;
    // graphs.push( new D3Form(graphType, form, options) );

    return graph;
}