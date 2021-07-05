# Buttons

These are the default buttons for all Musora brands. All primary and secondary buttons should use their corresponding primary brand colors. Tertiary
buttons are typically white (#FFFFFF) but in some cases can be grey (#8C9698) or black (#000000). The default height of each button is 50px but can be
adjusted depending on the scenario. The default length is dermined by the text and icons included within each button.
<br><br>
Buttons are used to initialize an action. Button labels should express the action that will occur when clicked. 
<br><br>

::: tip Usage
Stylesora includes helpful button 'patterns' that can be extended or updated with Tailwind classes. If a design calls for something completely new, you can build your own button using Tailwind. Additionally, if you find yourself repeating this pattern consider adding it to Stylesora!  
:::
#### Types
<br>
<hr>

#### Primary Buttons
<br>

Primary buttons are customized by adding background color classes prefixed with `tw-bg-`. You can use the brand themes which add a hover state for you, or use one of Tailwinds colors and define your own hover state color.  

##### Example 
<br>

<a href="#" class="tw-btn-primary tw-bg-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-primary tw-bg-pianote">
    <span>
        Icon Right
        <i class="fa fa-bell tw-pl-2" aria-hidden="true"></i>
    </span>
</a>
<a href="#" class="tw-btn-primary tw-bg-guitareo">
    <span>
        <i class="fa fa-pencil tw-pr-2" aria-hidden="true"></i>
        Icon Left
    </span>
</a>
<a href="#" class="tw-btn-primary tw-bg-singeo tw-px-4">
    <i class="fa fa-star" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-primary" disabled>
    <span>Disabled</span>
</a>

```html
<a href="#" class="tw-btn-primary tw-bg-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-primary tw-bg-guitareo">
    <span>
        <i class="fa fa-pencil tw-pr-2" aria-hidden="true"></i>
        Icon Left
    </span>
</a>
<a href="#" class="tw-btn-primary tw-bg-pianote">
    <span>
        Icon Right
        <i class="fa fa-bell tw-pl-2" aria-hidden="true"></i>
    </span>
</a>
<a href="#" class="tw-btn-primary tw-bg-singeo tw-px-4">
    <i class="fa fa-star" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-primary" disabled>
    <span>Disabled</span>
</a>
```
<hr>

#### Secondary Buttons
<br>

Secondary buttons are customized by adding text color classes prefixed with `tw-text-`. All secondary buttons add a subtle gray background on hover. Like primary buttons, you can further customize them with Tailwind's classes.  
##### Example 
<br>

<a href="#" class="tw-btn-secondary tw-text-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-secondary tw-text-pianote">
    <span>
        Icon Right
        <i class="fa fa-bell tw-pl-2" aria-hidden="true"></i>
    </span>
</a>
<a href="#" class="tw-btn-secondary tw-text-guitareo">
    <span>
        <i class="fa fa-pencil tw-pr-2" aria-hidden="true"></i>
        Icon Left
    </span>
</a>
<a href="#" class="tw-btn-secondary tw-text-singeo tw-px-4">
    <i class="fa fa-star" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-secondary" disabled>
    <span>Disabled</span>
</a>

```html
<a href="#" class="tw-btn-secondary tw-text-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-secondary tw-text-pianote">
    <span>
        Icon Right
        <i class="fa fa-bell tw-pl-2" aria-hidden="true"></i>
    </span>
</a>
<a href="#" class="tw-btn-secondary tw-text-guitareo">
    <span>
        <i class="fa fa-pencil tw-pr-2" aria-hidden="true"></i>
        Icon Left
    </span>
</a>
<a href="#" class="tw-btn-secondary tw-text-singeo tw-px-4">
    <i class="fa fa-star" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-secondary" disabled>
    <span>Disabled</span>
</a>
```

<hr>

#### Button Variants Classes

##### Small Buttons 
<br>

The `tw-btn-small` decreases height and font-size of buttons.

<br>

<a href="#" class="tw-btn-primary tw-btn-small tw-bg-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-pianote">
    <span>
        <i class="fa fa-bell tw-pr-2" aria-hidden="true"></i>
        Icon Left
    </span>
</a>
<a href="#" class="tw-btn-primary tw-btn-small tw-px-2 tw-bg-recordeo">
    <i class="fa fa-star tw-text-red-500" aria-hidden="true"></i> 
</a>
<a href="#" class="tw-btn-primary tw-btn-small" disabled>
    <span>Disabled</span>
</a>

```html
<a href="#" class="tw-btn-primary tw-btn-small tw-bg-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-pianote">
    <span>
        <i class="fa fa-bell tw-pr-2" aria-hidden="true"></i>
        Icon Left
    </span>
</a>
<a href="#" class="tw-btn-primary tw-btn-small tw-px-2 tw-bg-recordeo">
    <i class="fa fa-star tw-text-red-500" aria-hidden="true"></i> 
</a>
<a href="#" class="tw-btn-primary tw-btn-small" disabled>
    <span>Disabled</span>
</a>
```

##### Circle Buttons
<br>

While it's almost possible to get a circular button by adjusting padding values as shown above, the `tw-btn-circle` class ensures the height and width of the button are the same by removing padding and forcing a specific height and width value.

<br>

<a href="#" class="tw-btn-primary tw-btn-circle tw-bg-drumeo">
    <i class="fa fa-database" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-secondary tw-btn-circle tw-text-pianote">
    <i class="fa fa-bell" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-btn-circle tw-text-singeo">
    <i class="fa fa-check" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-primary tw-btn-small tw-btn-circle" disabled>
    <i class="fa fa-pencil" aria-hidden="true"></i> 
</a>

```html
<a href="#" class="tw-btn-primary tw-btn-circle tw-bg-drumeo">
    <i class="fa fa-database" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-secondary tw-btn-circle tw-text-pianote">
    <i class="fa fa-bell" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-btn-circle tw-text-singeo">
    <i class="fa fa-check" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-primary tw-btn-small tw-btn-circle" disabled>
    <i class="fa fa-pencil" aria-hidden="true"></i> 
</a>
```