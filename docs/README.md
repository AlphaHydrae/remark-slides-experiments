class: center, middle

# Experiments with [remark](https://remarkjs.com)

([incremental slides](#incremental-slides), [tables](#tables), [columns](#columns), [incremental highlight](#incremental-highlight), [graphs](#graphs))



---

name: incremental-slides

# Incremental slides

In Java:

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World");
  }
}
```

--

In JavaScript:

```js
console.log("Hello World!");
```

--

In Ruby

```rb
puts "Hello World!"
```



---

name: tables

# Tables

| Service models              | Abbreviation | Examples                     |
| :-                          | :-           | :-                           |
| Infrastructure as a Service | IaaS         | Amazon EC2, Azure, Rackspace |
| Platform as a Service       | PaaS         | Heroku, OpenShift            |
| Software as a Service       | SaaS         | Gmail                        |
| Functions as a Service      | FaaS         | Amazon Lambda                |



---

name: columns

# Columns with [unsemantic](http://unsemantic.com)

.grid-40[
**40% left column**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur velit ut
arcu molestie, id ultrices diam elementum. Donec eu ultricies lacus. Nullam quis
velit nec ante faucibus ultrices. Mauris luctus justo vel dignissim gravida.
Integer velit odio, pulvinar sed urna sit amet, pharetra lobortis ante.
]

.grid-60[
**60% right column**

Praesent blandit posuere nulla non laoreet. Vivamus nunc erat, vulputate vitae
est vitae, sagittis fermentum purus. Vivamus vestibulum mollis augue non
rhoncus. Vivamus ut felis nec sapien commodo malesuada. Duis vitae odio nec
velit maximus eleifend eu eget nisi. In suscipit, nisi pulvinar tincidunt
vehicula, diam odio lobortis nisl, vitae elementum arcu nulla ac nibh. Ut
lacinia lacus vel pharetra pretium. Morbi accumsan lectus sed gravida convallis.
]



---

name: incremental-highlight
class: highlight-one

# Highlight code and related description

This is a custom plugin written with [jQuery](https://jquery.com).

.grid-60[

```js
var aNumber = `3.12`;

var aBoolean = `true`;

var aString = `"foo"`;

*var anObject = {
  aProperty: `null`
};
```

]

.grid-40[

* .highlight-desc[this is a number]
* .highlight-desc[this is a boolean]
* .highlight-desc[this is a string]
* .highlight-desc[this is an object]
* .highlight-desc[this is null]

]

.highlight-next[]

--
.highlight-next[]
--
.highlight-next[]
--
.highlight-next[]
--
.highlight-next[]



---

name: graphs

# Graphs with [mermaid](http://knsv.github.io/mermaid/)

What you write in your Markdown file:

```html
<div class="mermaid">
  graph LR;
    A["Hello"]-->|who?|B;
    B["World"];
</div>
```

What you get:

<div class='mermaid'>
  graph LR;
    A["Hello"]-->|who?|B;
    B["World"];
</div>
