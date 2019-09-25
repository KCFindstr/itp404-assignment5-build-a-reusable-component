import React from 'react';
import './App.css';
import FileTree from './FileTree';

export default class App extends React.Component {
  handleClick(props) {
    alert('You clicked ' + props.name);
  }
  treeRenderer(name, expanded, handleClick) {
    return (
      <div className="important-node" onClick={handleClick}>
        <span className="important-icon">!</span>
        {name}
      </div>
    );
  }
  render() {
    return (
      <div>
        <p>
          The <i>FileTree</i> reusable component contructs a tree structure where each node is expandable. Although this component can be used in other situations, it is designed to visualize a filesystem structure, and therefore I name it "FileTree". It accepts the following props:
        </p>
        <ul>
          <li><strong>children</strong>: Some React element to be rendered when the node expands. This naming is provided by React.</li>
          <li><strong>name</strong>: The filename of current node. Since it could be either a file name or a directory name, this property is called "name".</li>
          <li><strong>onClick</strong>: onClick listener of current node (excluding its children). The name follows the convention of React.</li>
          <li><strong>renderer</strong>: Custom render function for a node. I name it "renderer" because it is a user-provided render function.</li>
        </ul>
        <p>
          <i>Motivation</i>: File navigation is very common in websites and native apps, so a reusable component representing the tree structure of filesystem would be useful.
        </p>
        <h3>Default:</h3>
        <FileTree name="Assignment5">
          <FileTree name="node_modules">
            <FileTree name=".bin"> </FileTree>
            <FileTree name=".cache" onClick={this.handleClick}> </FileTree>
            <FileTree name=".yarn-integrity" onClick={this.handleClick}/>
          </FileTree>
          <FileTree name="src">
            <FileTree name="App.css"/>
            <FileTree name="App.js"/>
            <FileTree name="FileTree.css"/>
            <FileTree name="FileTree.js"/>
            <FileTree name="index.css"/>
            <FileTree name="index.js"/>
            <FileTree name="serviceWorker.js"/>
          </FileTree>
          <FileTree name="package.json"/>
          <FileTree name="README.md" onClick={this.handleClick}/>
          <FileTree name="yarn.lock"/>
        </FileTree>
        <h3>Custom Rendering:</h3>
        <FileTree name="Assignment5" renderer={this.treeRenderer}>
          <FileTree name="node_modules">
            <FileTree name=".bin"> </FileTree>
            <FileTree name=".cache" onClick={this.handleClick}> </FileTree>
            <FileTree name=".yarn-integrity" onClick={this.handleClick}/>
          </FileTree>
          <FileTree name="src" renderer={this.treeRenderer}>
            <FileTree name="App.css"/>
            <FileTree name="App.js"/>
            <FileTree name="FileTree.css"/>
            <FileTree name="FileTree.js"/>
            <FileTree name="index.css"/>
            <FileTree name="index.js"/>
            <FileTree name="serviceWorker.js"/>
          </FileTree>
          <FileTree name="package.json" renderer={this.treeRenderer}/>
          <FileTree name="README.md" onClick={this.handleClick} renderer={this.treeRenderer}/>
          <FileTree name="yarn.lock"/>
        </FileTree>
      </div>
    );
  }
}

