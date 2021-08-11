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
        Pianote
    </span>
</a>
<a href="#" class="tw-btn-primary tw-bg-guitareo">
    <span>
        <i class="fa fa-play tw-pr-1.5" aria-hidden="true"></i>
        Guitareo
    </span>
</a>
<a href="#" class="tw-btn-primary tw-bg-singeo">
    <span>
        <i class="fa fa-plus tw-pr-1.5" aria-hidden="true"></i>
        Singeo
    </span>
</a>
<a href="#" class="tw-btn-primary" disabled>
    <span>Disabled</span>
</a>

```html
<a href="#" class="tw-btn-primary tw-bg-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-primary tw-bg-pianote">
    <span>
        Pianote
    </span>
</a>
<a href="#" class="tw-btn-primary tw-bg-guitareo">
    <span>
        <i class="fa fa-play tw-pr-1.5" aria-hidden="true"></i>
        Guitareo
    </span>
</a>
<a href="#" class="tw-btn-primary tw-bg-singeo">
    <span>
        <i class="fa fa-plus tw-pr-1.5" aria-hidden="true"></i>
        Singeo
    </span>
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
        Pianote
    </span>
</a>
<a href="#" class="tw-btn-secondary tw-text-guitareo">
    <span>
        <i class="fa fa-play tw-pr-1.5" aria-hidden="true"></i>
        Guitareo
    </span>
</a>
<a href="#" class="tw-btn-secondary tw-text-singeo">
    <span>
        <i class="fa fa-plus tw-pr-1.5" aria-hidden="true"></i>
        Singeo
    </span>
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
        Pianote
    </span>
</a>
<a href="#" class="tw-btn-secondary tw-text-guitareo">
    <span>
        <i class="fa fa-play tw-pr-1.5" aria-hidden="true"></i>
        Guitareo
    </span>
</a>
<a href="#" class="tw-btn-secondary tw-text-singeo">
    <span>
        <i class="fa fa-plus tw-pr-1.5" aria-hidden="true"></i>
        Singeo
    </span>
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
<a href="#" class="tw-btn-primary tw-btn-small tw-bg-pianote">
    <span>Pianote</span>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-guitareo">
    <span>
        <i class="fa fa-play tw-pr-1.5" aria-hidden="true"></i>
        Guitareo
    </span>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-singeo">
    <span>
        <i class="fa fa-plus tw-pr-1.5" aria-hidden="true"></i>
        Singeo
    </span>
</a>
<a href="#" class="tw-btn-primary tw-btn-small" disabled>
    <span>Disabled</span>
</a>

```html
<a href="#" class="tw-btn-primary tw-btn-small tw-bg-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-primary tw-btn-small tw-bg-pianote">
    <span>Pianote</span>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-guitareo">
    <span>
        <i class="fa fa-play tw-pr-1.5" aria-hidden="true"></i>
        Guitareo
    </span>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-singeo">
    <span>
        <i class="fa fa-plus tw-pr-1.5" aria-hidden="true"></i>
        Singeo
    </span>
</a>
<a href="#" class="tw-btn-primary tw-btn-small" disabled>
    <span>Disabled</span>
</a>
```

##### Large Buttons
<br>

The `tw-btn-large` increases height and font-size of buttons.

<br>

<a href="#" class="tw-btn-primary tw-btn-large tw-bg-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-secondary tw-btn-large tw-text-pianote">
    <i class="fa fa-play tw-pr-3 tw-text-xl" aria-hidden="true"></i>
    <span>Pianote</span>
</a>

```html
<a href="#" class="tw-btn-primary tw-btn-large tw-bg-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-secondary tw-btn-large tw-text-pianote">
    <i class="fa fa-play tw-pr-3 tw-text-xl" aria-hidden="true"></i>
    <span>Pianote</span>
</a>
```

##### Circle Buttons
<br>

While it's almost possible to get a circular button by adjusting padding values as shown above, the `tw-btn-circle` class ensures the height and width of the button are the same by removing padding and forcing a specific height and width value.

<br>

<a href="#" class="tw-btn-secondary tw-text-recordeo tw-btn-circle tw-btn-large">
    <i class="fa fa-play" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-primary tw-btn-circle tw-bg-drumeo">
    <i class="fa fa-database" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-secondary tw-btn-circle tw-text-pianote">
    <i class="fa fa-bell" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-primary tw-btn-small tw-btn-circle tw-bg-singeo">
    <i class="fa fa-check" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-btn-circle tw-text-guitareo">
    <i class="fa fa-play" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-primary tw-btn-small tw-btn-circle" disabled>
    <i class="fa fa-pencil" aria-hidden="true"></i> 
</a>

```html
<a href="#" class="tw-btn-secondary tw-text-recordeo tw-btn-circle tw-btn-large">
    <i class="fa fa-play" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-primary tw-btn-circle tw-bg-drumeo">
    <i class="fa fa-database" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-secondary tw-btn-circle tw-text-pianote">
    <i class="fa fa-bell" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-primary tw-btn-small tw-btn-circle tw-bg-singeo">
    <i class="fa fa-check" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-btn-circle tw-text-guitareo">
    <i class="fa fa-play" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-primary tw-btn-small tw-btn-circle" disabled>
    <i class="fa fa-pencil" aria-hidden="true"></i> 
</a>
```

<hr>

#### Custom Button Examples
<br>

There may be times where the design calls for a button that is outside of the brand colors. Luckily Tailwind gives a wide variety of colors and helper classes to choose from. 

<br>

<div class="tw-bg-dm-royal-blue tw-p-4 tw-w-full tw-rounded-md">
<a href="#" class="tw-transition-none tw-px-6 tw-h-auto tw-py-3 tw-btn-secondary tw-btn-small tw-text-pink-600 hover:tw-bg-pink-600 hover:tw-text-white hover:tw-border-pink-600">
    <span>
        <i class="fa fa-play tw-pr-1.5" aria-hidden="true"></i>
        Songs Trailer
    </span>
</a>
<a href="#" class="tw-transition-none tw-px-6 tw-h-auto tw-py-3 tw-btn-secondary tw-btn-small tw-text-yellow-400 hover:tw-bg-yellow-400 hover:tw-text-white hover:tw-border-yellow-400">
    <span>
        <i class="fa fa-play tw-pr-1.5" aria-hidden="true"></i>
        Coaches Trailer
    </span>
</a>
</div>


```html
<a href="#" class="tw-transition-none tw-px-6 tw-h-auto tw-py-3 tw-btn-secondary tw-btn-small tw-text-pink-600 hover:tw-bg-pink-600 hover:tw-text-white hover:tw-border-pink-600">
    <span>
        <i class="fa fa-play tw-pr-1.5" aria-hidden="true"></i>
        Songs Trailer
    </span>
</a>
<a href="#" class="tw-transition-none tw-px-6 tw-h-auto tw-py-3 tw-btn-secondary tw-btn-small tw-text-yellow-400 hover:tw-bg-yellow-400 hover:tw-text-white hover:tw-border-yellow-400">
    <span>
        <i class="fa fa-play tw-pr-1.5" aria-hidden="true"></i>
        Coaches Trailer
    </span>
</a>
```