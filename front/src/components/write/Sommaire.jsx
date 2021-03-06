import React from 'react';
import { Link } from 'react-router-dom';

export default function Sommaire(props){
  return (
    <div id="sommaire">
        <h1 className={props.closed?"title closed":"title"} onDoubleClick={()=>props.toggle()}>Sommaire</h1>
        {!props.closed && <section>
            {props.md && props.md.split('\n').map(function(line,i){
                let matched = line.match(/^#+\ /);
                if(matched){
                    let Tag = `pre`;
                    if(matched[0] == "# "){Tag = `h1`}
                    if(matched[0] == "## "){Tag = `h1`}
                    if(matched[0] == "### "){Tag = `h2`}
                    if(matched[0] == "#### "){Tag = `h3`}
                    if(matched[0] == "##### "){Tag = `h4`}
                    if(matched[0] == "###### "){Tag = `h5`}
                    return (<Tag key={"line"+i} onClick={()=>props.setCursor(i)}>{line.replace(/#/g,'')}</Tag>)
                }
                else{
                    return null
                }
            })}
        </section>}
    </div>
  )
}
