<script setup>
import App from './demo/Notification/App.vue';
import Basic from './demo/Notification/Basic.vue';
import Title from './demo/Notification/Title.vue';
</script>

# Notification

Display a toast notification in your app.

## Usage

First of all, add the `Notifications` component to your app, preferably inside `app.vue`.

<<< @/overlays/demo/Notification/App.vue

This component will render the notifications at the bottom right of the screen by default. You can configure its
behavior in the `app.config.ts` through `ui.notifications`:

<<< @/overlays/demo/Notification/app.config.ts

Then, you can use the `useToast` composable to add notifications to your app:

<DemoContainer>
<Basic/>
</DemoContainer>

<<< @/overlays/demo/Notification/Basic.vue

When using `toast.add`, this will push a new notification to the stack displayed in `<s-notifications />`. All the props of
the `Notification` component can be passed to `toast.add`.

<<< @/overlays/demo/Notification/ToastAdd.vue

You can also use the `Notification` component directly in your app as an alert for example.

# Title

Pass a `title` to your Notification.

<DemoContainer>
<Title/>
</DemoContainer>

<<< @/overlays/demo/Notification/Title.vue