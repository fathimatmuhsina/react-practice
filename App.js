/*
<div id="parent">
  <div id='Child1>
    <h1>Iam h1 tag</h1>
    <h2>Iam h2 tag</h2>
  </div>
  <div id='Child2>
    <h1>Iam h1 tag</h1>
    <h2>Iam h2 tag</h2>
  </div>
</div>





*/




const heading=React.createElement("div",
  {
id:"parent"
}
,[React.createElement("div",{id:"child1"},
  [React.createElement("h1",{},"Iam h1 tag"),
  React.createElement("h2",{},"Iam h2 tag")]
),
React.createElement("div",{id:"child2"},
  [React.createElement("h1",{},"Iam h1 tag"),
  React.createElement("h2",{},"Iam h2 tag")]
)

]


);

  const root=ReactDOM.createRoot(document.getElementById("root"))
  root.render(heading)