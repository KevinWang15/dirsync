import React from "react";
import "./entry.scss"

const SymbolVerb = Symbol("verb");
const SymbolChildrenStats = Symbol("children-stats");

/*
TODO:
1. constructor called twice?
2. generify  copy, delete, overwrite
3. refactor code, do not use "symbol"
 */

function renderChildrenStats(childrenStats) {
    return <span className={"children-stats"}>
        {childrenStats.copy > 0 && <span className={"copy"}>+ {childrenStats.copy}</span>}
        {childrenStats.delete > 0 && <span className={"delete"}>- {childrenStats.delete}</span>}
        {childrenStats.overwrite > 0 && <span className={"overwrite"}>~ {childrenStats.overwrite}</span>}
    </span>
}

function getEffectiveVerb(props) {
    if (props.verb) {
        return props.verb;
    }

    if (props.childrenStats) {
        let sum = 0;
        for (let verb of ['copy', 'delete', 'overwrite']) {
            sum += props.childrenStats[verb];
        }

        for (let verb of ['copy', 'delete', 'overwrite']) {
            if (props.childrenStats[verb] > 0 && props.childrenStats[verb] === sum) {
                return verb;
            }
        }
    }
    return "";
}

class Entry extends React.Component {
    state = {expanded: false}

    render() {
        return <div className="entry">
            <div className={`row ${'verb-' + getEffectiveVerb(this.props)}`}
                 onClick={() => {
                     this.setState({expanded: !this.state.expanded});
                 }}>

                <span>
                    {Object.keys(this.props.children).length > 0 ? this.state.expanded ? "-" : '+' : "·"} {this.props.name}
                </span>

                {!!this.props.verb ?
                    <span className={"verb"}>{this.props.verb}</span> : renderChildrenStats(this.props.childrenStats)}
            </div>


            {!!this.state.expanded && <div className="expanded">
                {Object.keys(this.props.children).map(key => <Entry key={key} name={key}
                                                                    childrenStats={this.props.children[key][SymbolChildrenStats]}
                                                                    verb={this.props.children[key][SymbolVerb]}
                                                                    children={this.props.children[key]}/>)}
            </div>}
        </div>
    }
}


function decorateWithChildrenStats(ptr) {
    if (ptr[SymbolVerb]) {
        ptr[SymbolChildrenStats] = ({
            "copy": ptr[SymbolVerb] === "copy" ? 1 : 0,
            "delete": ptr[SymbolVerb] === "delete" ? 1 : 0,
            "overwrite": ptr[SymbolVerb] === "overwrite" ? 1 : 0,
        })

        return;
    }

    const thisLevelStats = {"copy": 0, "delete": 0, "overwrite": 0};
    for (let key of Object.keys(ptr)) {
        if (Symbol(key) === SymbolVerb || Symbol(key) === SymbolChildrenStats) {
            continue
        }

        decorateWithChildrenStats(ptr[key]);
        for (let verb of Object.keys(ptr[key][SymbolChildrenStats])) {
            thisLevelStats[verb] += ptr[key][SymbolChildrenStats][verb];
        }
    }

    ptr[SymbolChildrenStats] = thisLevelStats;
}

class App extends React.Component {

    tree = {};

    constructor() {
        super();

        const data = window.getData();

        for (const verb of Object.keys(data)) {
            for (const path of data[verb]) {
                const segments = path.split("/");

                let ptr = this.tree;
                for (let segment of segments) {
                    if (!ptr[segment]) {
                        ptr[segment] = {};
                    }
                    ptr = ptr[segment];
                }

                ptr[SymbolVerb] = verb;
            }
        }

        decorateWithChildrenStats(this.tree);
    }

    render() {
        return <div>
            {Object.keys(this.tree).map(key => <Entry key={key} name={key}
                                                      childrenStats={this.tree[key][SymbolChildrenStats]}
                                                      verb={this.tree[key][SymbolVerb]}
                                                      children={this.tree[key]}/>)}
        </div>
    }
}

export default App;
