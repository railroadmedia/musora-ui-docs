# Site 

While Typography comprises most of a websites content. There are other forms of content that can be that should be considered when building out the front-end of you site.
Stylesora includes some of these additional content elements in it's base styles.

#### Links
<br>

Musora's link styles closely match paragraph elements. The difference would be the addition of the `tw-text-current` and `visited:tw-text-current`. These classes are added to 
ensure the link itself is not styled by default. So you can use add additional styles without having to override the defaults.  
<br>

##### Examples
<br>
<div class="tw-p-4 tw-bg-gray-100">
    <!-- Link in Paragraph -->
    <p>Paragraph <a href="#" title="this link goes nowhere">link</a> with no styles.</p>
    <!-- Email Link -->
    <p>Email: <a href="@mailto:example@email.com" title="" target="" class="tw-text-drumeo">example@email.com</a> </p>
    <!-- Phone Link -->
    <p>Phone: <a href="tel:555-555-5555" title="Example Phone link" target="" class="tw-text-pianote hover:tw-underline">555-555-5555</a> </p>
    <!-- Open in new tab -->
    <p>New Tab: <a href="/" title="Open this page in new tab" target="_blank" class="tw-text-guitareo tw-font-bold hover:tw-text-green-500">New Tab</a> </p>
</div>

```html
<div class="tw-font-bison-bold tw-uppercase">
    <!-- Link in Paragraph -->
    <p>Paragraph <a href="#" title="this link goes nowhere">link</a> with no styles.</p>
    <!-- Email Link -->
    <p>Email: <a href="@mailto:example@email.com" title="" target="" class="tw-text-drumeo">example@email.com</a> </p>
    <!-- Phone Link -->
    <p>Phone: <a href="tel:555-555-5555" title="Example Phone link" target="" class="tw-text-pianote hover:tw-underline">555-555-5555</a> </p>
    <!-- Open in new tab -->
    <p>New Tab: <a href="/" title="Open this page in new tab" target="_blank" class="tw-text-guitareo tw-font-bold hover:tw-text-green-500">New Tab</a> </p>
</div>
```
<br><hr>

#### Lists
<br>

Lists are used to display content that share a common theme. Stylesora includes prestyled ordered and unordered lists. By Default, lists are unstyled but you can tailwind classes to them. We've also added an additional `tw-list-square` utility class to give more design options.    
<br>

##### Examples
<br>
<div class="tw-p-4 tw-bg-gray-100">
    <p class="tw-font-semibold">Ordered List</p>
    <ol class="tw-list-decimal">
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
    </ol>
    <br>
    <p class="tw-font-semibold">Unordered List (styled bullets)</p>
    <ul class="tw-list-disc">
        <li class="tw-text-red-500"><span class="tw-text-black">Item One</span></li>
        <li class="tw-text-blue-500"><span class="tw-text-black">Item Two</span></li>
        <li class="tw-text-green-500"><span class="tw-text-black">Item Three</span></li>
    </ul>
    <br>
    <p class="tw-font-semibold">Unordered List (squares)</p>
    <ul class="tw-list-square">
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
    </ul>
</div>

```html
<div class="tw-font-bison-bold tw-uppercase">
    <h6>Ordered List</h6>
    <ol class="tw-list-decimal">
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
    </ol>
    <br>
    <h6>Unordered List</h6>
    <ul class="tw-list-disc">
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
    </ul>
    <br>
    <h6>Unordered List (squares)</h6>
    <ul class="tw-list-square">
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
    </ul>
</div>
```
<br><hr>

#### Tables
<br>

Coming soon...