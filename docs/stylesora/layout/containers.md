---
sidebar: false
---

# Containers

Containers limit your content to a certain width or viewport size. Below we'll highlight the most common utility classes we use contain page content. 

<br><hr><br>

### Types
<br>
<hr>

#### Musora's Content Container
<br>

The content container is the container used throughout most of Musora's applications. This should be added to an HTML element that wraps all of your page content. You can use this container by adding the `tw-content-conatiner` class.

<br>

<div class="tw-h-14">
    <div class="tw-absolute tw-w-screen tw-right-0">
        <div class="tw-content-container tw-bg-guitareo-200 tw-rounded tw-text-center tw-text-guitareo-700">
            <div class="tw-border-dotted tw-p-4 tw-border-current">
                Content Container
            </div>
        </div>
    </div>
</div>

```html
<div class="tw-content-container ...">
    <!-- Inner Content -->
</div>
```
#### Tailwind Container
<br>

The Tailwind container is a helpfufl mobile-first container that adjust it's size based on the Tailwind responsive breakpoints. The Tailwind breakpoints make this container slightly larger than the content container. Also unlike the content container, it does not align itself or add any other css. The container You can use this container by adding the `tw-conatiner` class.

<br>

<div class="tw-h-14">
    <div class="tw-absolute tw-w-screen tw-right-0">
        <div class="tw-container tw-mx-auto tw-bg-drumeo-200 tw-rounded tw-text-center tw-text-drumeo-700">
            <div class="tw-border-dotted tw-p-4 tw-border-current">
                Tailwind Container
            </div>
        </div>
    </div>
</div>

```html
<div class="tw-container tw-mx-auto ...">
    <!-- Inner Content -->
</div>
```