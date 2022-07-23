# Feedback Fin wrapper for React

**A tiny widget to collect feedback anywhere on your website. Now in a react component!!!.**

<a href="https://feedbackfin.com" target="_blank" rel="noopener">
  <img src="https://user-images.githubusercontent.com/27017118/160980505-edf2c161-730d-4ba1-9ae2-2a0a01454954.gif" width="420" height="380" alt="Demo GIF" />
</a>

## Original Widget
[Web](https://feedbackfin.com)
[Github](https://github.com/rowyio/feedbackfin)

## How it works

```html
<Feedback rowyUrl='https://rowy-hooks.run.app/wh/...'>
 <button>Click</button>
</Feedback>
```

## Setting up a webhook URL (rowyUrl)

This is the URL to send the feedback to. The widget will make a POST request to
this URL with the feedback data as a JSON body.

Generate a webhook URL easily using Rowy's low-code platform and manage feedback data on a collaborative spreadsheet-UI. Optionally, you can further automate on incoming feedback with Rowy's built-in code-editor (eg: notify on team slack/discord, email follow up etc).

End-to-end video instructions on the [website&nbsp;&UpperRightArrow;](https://feedbackfin.com/setup)

