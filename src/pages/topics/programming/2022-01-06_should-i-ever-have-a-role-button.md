---
title: 'Should I ever have a role="button"?'
publishDate: '2022-01-06'
layout: '$layouts/BlogPost.astro'
author: 'Vesa Piittinen'
description: 'This accessibility related post explores valid use cases for role="button" in HTML (in React lens).'
devUrl: 'https://dev.to/merri/should-i-ever-have-a-rolebutton-4f3c'
---
The answer is no. You should always use `<button />`.

However there exists **one** valid niche use case. You have a design where you have an element that looks like a link inside other running text. This means the element should wrap just like the text! So isn't this just a link? Well, there is a gotcha: for whatever reason the behavior of the element is not to navigate to another url but to do a button action.

Now, you can argue that this is design gone bad, and you're right. However in real life it is hard to avoid this kind of issues since the process has to be good and people aware enough for this not to ever happen. So it keeps happening.

How should we handle this use case?

## So much to do!

The big problem when going ARIA route is the need to do so much to get things right. We have these considerations:

- Should visually behave like any other link would
- Should functionally behave like a button
- Should have focus indication
- Should be announced as button for a screen reader

We would like to avoid all this. It would be so simple to just use `<button />` and style it as a link. But can we do that?

----

### Visually as a link

You could go ahead and duplicate your link styles for this element. You might also think that using `<button />` element would be fine, just drop in `display: inline;` and good to go, right?

Well, the answer is **no**. `<button />` will never respect your `display: inline;` no matter how much `!important` you throw at it. It won't budge: it'll always be a minimum of `display: inline-block;`. That's a bummer. Shouldn't CSS have control over everything?

<p class="codepen" data-height="512" data-theme-id="dark" data-default-tab="js,result" data-user="Merri" data-slug-hash="abLjmdm" style="height: 512px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Button neves becomes inline">
	<a href="https://codepen.io/Merri/pen/abLjmdm">Codepen: Button neves becomes inline</a>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

There are likely good historical reasons for buttons not to respect `display: inline;`. To me it is enough to know that it just doesn't work. And because our use case is a link that should wrap just like all the other text, well, `<button />` just simply can't meet that criteria.

So what should we do then? Use a `<span />` element? It is a possibility. However I think it is easier to actually make use of the anchor element since this means you can handle the issue in your normal link styles! This kind of means "zero styles" necessary for a custom element, no need for `className` etc.

So what should our style rules look like?

```css
/* Note: we support `<a role="button" />` */
a {
	/* Provide your link color to anchor element. */
	color: royalblue;
	/* Links have a pointer cursor. */
	cursor: pointer;
	/* Links probably should always have underline. */
	text-decoration: underline;
}
```

There aren't really much use for anchors on the web these days so this shouldn't cause any undesired side effects on any modern website.

The nice thing about this is that you get to handle the issue with rather minimal CSS, and it can happen in your `normalize.css` or equivalent place where you handle default styles. It makes sense since ideally we'll be using the native anchor element directly in our code, not a component that renders an anchor.

----

### Functionally like a button

We can do just `<a onClick={() => {}} />` and call it a day, right?

**Wrong!** You also need to add in keyboard functionality. And that means there are multiple related things that need to be done. First and foremost the element needs to become accessible by keyboard. For that we need `tabIndex`!

```tsx
<a onClick={onClick} tabIndex={0}>Looks like a link!</a>
```

So are we done? We can now focus the element with a keyboard and get a default focus indication on it, too! However there is more to a `<button />` functionality. Links navigate when you press the enter key. Buttons do their action with enter. However buttons also do their action when you press the space key! And in this case we have an anchor element which reacts to neither, because **anchor is not a link**.

So we need to handle enter and space keys and add `onKeyDown` handler.

```tsx
function onKeyDown(event: React.KeyboardEvent<any>) {
	if (event.isDefaultPrevented() || !(event.target instanceof HTMLElement)) return
	if ([' ', 'Enter'].includes(event.key)) {
		event.target.click()
		event.preventDefault()
	}
}

<a onClick={onClick} onKeyDown={onKeyDown} tabIndex={0}>
	Looks like a link!
</a>
```

This event handler won't execute if `event.preventDefault()` has been called by someone before this handler executes. It makes sense since we're implementing **default behavior**. We are reimplementing how the web works so we also should behave similarly. So while it might be a rather edge case it is one potential future bug less when we respect the world of DOM, and give an option to skip the behavior.

The other part of the first `if` condition is to "make TypeScript happy".

But hey, are we done?

I'm happy to let you know that we are not done. There is one thing in Firefox: it lets you drag anchor elements. However we don't want this behavior and it is a bit annoying that element might start moving upon click, and then not click due to entering dragging mode.

```tsx
<a
	draggable={false}
	onClick={onClick}
	onDragStart={(event: React.DragEvent) => event.preventDefault()}
	onKeyDown={onKeyDown}
	tabIndex={0}
>
	Looks like a link!
</a>
```

Darn it. How to remember all of that? You might be able to omit `draggable` but it might be a safer bet to have it to let everything absolutely know that we don't want dragging on this element.

----

### Announced as a button

This is one more attribute, but this time we can get through with just one addition:

```tsx
<a
	draggable={false}
	onClick={onClick}
	onDragStart={(event: React.DragEvent) => event.preventDefault()}
	onKeyDown={onKeyDown}
	role="button"
	tabIndex={0}
>
	Looks like a link!
</a>
```

With that we are **finally done**!

But... that is awful lot of code to repeat every single time we have a need for this, and it is too easy to forget something being done.

One solution would be to make this a component. Call it a `TextLinkButton` or something! However there is one gotcha with components: it hides the semantics of what we're doing. People also expect components to contain their own styles, but in this case we want to rely on default or generic styles. So by making this a component we break one ideal, or an expectation other developers might have.

## Utility props

There is another way to deal with the issue of too many props: just provide an object to be shared!

```ts
// buttonRoleProps.ts

function onKeyDown(event: React.KeyboardEvent<any>) {
	if (event.isDefaultPrevented() || !(event.target instanceof HTMLElement)) return
	if ([' ', 'Enter'].includes(event.key)) {
		event.target.click()
		event.preventDefault()
	}
}

function preventDefault(event: any) {
	event.preventDefault()
}

/** Usage: `<a {...buttonRoleProps} />` */
export const buttonRoleProps: React.HTMLProps<any> = {
	draggable: false,
	onDragStart: preventDefault,
	onKeyDown,
	role: 'button',
	tabIndex: 0,
}
```

These props have been designed so that references to functions remain always the same. This reduces the burden of changing DOM on render for no-good-reason.

There is of course one tradeoff being made here: if for whatever reason you need to customize `onKeyDown` you have to re-implement the space and enter key support. However I feel like this is becoming such a niche case of a niche case that it is just better add documentation to the utility like "remember to handle space and enter keys if you use custom `onKeyDown` handler" rather than solving the issue.

With that we now have a rather complete solution with very few lines of additional CSS, and with minimal JavaScript code! All needs for basic button behavior and expectations have been tackled, and developer experience is very simple as well:

```tsx
return (
	<>This is text <a {...buttonRoleProps} onClick={onClick}>that has button looking like a link</a> within!</>
)
```

----

### But solving the issue

Overkill mode is now active. In my opinion this is absolutely too much code for this issue.

```tsx
// buttonize.ts
import { buttonRoleProps } from './buttonRoleProps'

const cache = new WeakMap()

const buttonize = (
	props?: JSX.Element | React.HTMLProps<any> | null | false
): JSX.Element | React.HTMLProps<any> => {
	if (!props) return buttonRoleProps

	if ('onKeyDown' in props && typeof props.onKeyDown === 'function') {
		const { onKeyDown } = props
		// having this memoize might also be overkill...
		if (!cache.has(onKeyDown)) {
			cache.set(onKeyDown, (event) => {
				onKeyDown(event)
				buttonRoleProps.onKeyDown(event)
			})
		}
		return { ...buttonRoleProps, ...props, onKeyDown: cache.get(onKeyDown) }
	}

	if (React.isValidElement(props)) {
		return React.cloneElement(props, buttonize(props.props))
	}

	return { ...buttonRoleProps, ...props }
}
```

What you can now do with this:

```tsx
// use as props:
<div>
	<a {...buttonize({ onClick, onKeyDown })}>I can have focus</a>
</div>

// pass in element:
<div>
	{buttonize(<a onClick={onClick} onKeyDown={onKeyDown}>I can have focus</a>)}
</div>

// compared to (here onKeyDown would also have to handle enter & space):
<div>
	<a {...buttonRoleProps} onClick={onClick} onKeyDown={onKeyDown}>I can have focus</a>
</div>
```

For some other use case this kind of helper utility might be worth it. But here? We're dealing with just one function callback that needs the default behavior to be available after a custom handler. Which is likely not needed, ever, in any project.

Of course the code amount isn't **that bad** but it's still something for something that isn't really needed.

----

## Closing it

So what did we learn here? Well, there are quite a bit of considerations to make an element work like a real button! Doesn't this highlight how much work the native web standards do for you that you might never wonder about yourself? Embrace the `<button />`, always! It is a truly awesome little piece of code. Even if you probably have to write `<button type="button" />` way too often, because not every button is a submit button!

There is still also one little consideration that occurred to me while making this article: `user-select: none;`. This is how typical buttons behave regarding text selection. So why didn't I bring it up earlier? Because after thinking about it we're dealing with a **text link**. You are supposed to be able to select the text, and should not disable it here. The button made here looks like it is part of the text so selection is an expected behavior.

But if at all possible, please avoid having a need for this in the first place! Yes, I know, it keeps happening to everyone. It always finds it's way in at some point when people develop websites. But maybe consider your design and development process and how it would make sure usability and tech specs are met in design?

So that it would be noticed that "hey, this isn't really a link, it is a button, it shouldn't look like a link" can happen when features are still in the design pipeline and not during development when changing a design on-the-fly might be rather costly. And then we end up with anchor elements that look like links that are really buttons. Or something worse.
