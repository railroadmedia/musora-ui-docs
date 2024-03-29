# Forms

Forms are widely used to collect user input and data. Forms should be concise and kept short when possible. Below is a collection of form styles made with Tailwind classes.

<br><hr>
### Input Fields
<br>

###### Text Input
<br>

<div class="tw-input-field">
    <label for="name" class="tw-label">Name</label>
    <div class="tw-input-wrapper">
        <input  type="text" 
                aria-required="true"
                name="name" 
                id="name" 
                class="focus:tw-border-drumeo"
                placeholder="Jane Doe">
    </div>
</div>


```html
<div class="tw-input-field">
    <label for="name" class="tw-label">Name</label>
    <div class="tw-input-wrapper">
        <input  type="text" 
                aria-required="true"
                name="name" 
                id="name" 
                class="focus:tw-border-drumeo"
                placeholder="Jane Doe">
    </div>
</div>
```

###### Email Input
<br>

<div class="tw-input-field">
    <label for="email" class="tw-label">Email</label>
    <div class="tw-input-wrapper">
        <input  type="email" 
                aria-required="true"
                name="email" 
                id="email" 
                class="focus:tw-border-drumeo"
                placeholder="jane@example.com">
    </div>
</div>

```html
<div class="tw-input-field">
    <label for="email" class="tw-label">Email</label>
    <div class="tw-input-wrapper">
        <input  type="email" 
                aria-required="true"
                name="email" 
                id="email" 
                class="focus:tw-border-drumeo"
                placeholder="jane@example.com">
    </div>
</div>
```

###### Number Input
<br>

<div class="tw-input-field">
    <label for="number" class="tw-label">Number</label>
    <div class="tw-input-wrapper">
        <input  type="number" 
                aria-required="true"
                name="number" 
                id="number" 
                class="focus:tw-border-drumeo"
                placeholder="350.00"
                step="0.01">
    </div>
</div>

```html
<div class="tw-input-field">
    <label for="number" class="tw-label">Number</label>
    <div class="tw-input-wrapper">
        <input  type="number" 
                aria-required="true"
                name="number" 
                id="number" 
                class="focus:tw-border-drumeo"
                placeholder="350.00"
                step="0.01">
    </div>
</div>
```

###### Password Input
<br>

<div class="tw-input-field">
    <label for="password" class="tw-label">Password</label>
    <div class="tw-input-wrapper">
        <input  type="password" 
                aria-required="true"
                name="password" 
                id="password" 
                class="focus:tw-border-drumeo"
                placeholder="Password"
            >
    </div>
</div>

```html
<div class="tw-input-field">
    <label for="password" class="tw-label">Password</label>
    <div class="tw-input-wrapper">
        <input  type="password" 
                aria-required="true"
                name="password" 
                id="password" 
                class="focus:tw-border-drumeo"
                placeholder="Password"
            >
    </div>
</div>
```

###### Telephone Input
<br>

<div class="tw-input-field">
    <label for="tel" class="tw-label">Telephone</label>
    <div class="tw-input-wrapper">
        <input  type="tel" 
                aria-required="true"
                name="tel" 
                id="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                class="focus:tw-border-drumeo"
                placeholder="999-999-9999">
    </div>
</div>

```html
<div class="tw-input-field">
    <label for="tel" class="tw-label">Telephone</label>
    <div class="tw-input-wrapper">
        <input  type="tel" 
                aria-required="true"
                name="tel" 
                id="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                class="focus:tw-border-drumeo"
                placeholder="999-999-9999">
    </div>
</div>

```

###### Text Area
<br>

<div class="tw-input-field">
    <label for="name" class="tw-label">Message</label>
    <div class="tw-input-wrapper">
        <textarea type="text" 
                name="name" 
                id="name"
                rows="4" 
                class="focus:tw-border-drumeo"
                placeholder="Add message here...">
        </textarea>
    </div>
</div>

```html
<div class="tw-input-field">
    <label for="name" class="tw-label">Message</label>
    <div class="tw-input-wrapper">
        <textarea type="text" 
                name="name" 
                id="name"
                rows="4" 
                class="focus:tw-border-drumeo"
                placeholder="Add message here...">
        </textarea>
    </div>
</div>
```

###### Search Input
<br>

<div class="tw-flex tw-items-center">
    <div class="tw-input-field tw-m-0 tw-flex-grow">
        <div class="tw-input-wrapper">
            <input  type="search" 
                    aria-required="true"
                    name="search" 
                    id="search" 
                    class="focus:tw-border-drumeo"
                    placeholder="Search the site...">
        </div>
    </div>
    <button class="tw-btn-primary tw-btn-circle tw-bg-transparent tw-text-gray-800">
        <i class="fa fa-search" aria-hidden="true"></i>
    </button>
</div>

```html
<div class="tw-flex tw-items-center">
    <div class="tw-input-field tw-m-0 tw-flex-grow">
        <div class="tw-input-wrapper">
            <input  type="search" 
                    aria-required="true"
                    name="search" 
                    id="search" 
                    class="focus:tw-border-drumeo"
                    placeholder="Search the site...">
        </div>
    </div>
    <button class="tw-btn-primary tw-btn-circle tw-bg-transparent tw-text-gray-800">
        <i class="fa fa-search" aria-hidden="true"></i>
    </button>
</div>
```

<br><hr>
#### Dropdowns
<br>

###### Select Box
<br>

<div class="tw-input-field">
    <label for="name" class="tw-label">Select</label>
    <div class="tw-input-wrapper">
        <select type="text" 
                name="name" 
                id="name" 
                class="focus:tw-border-drumeo"
                placeholder="Jane Doe">
            <option value="" selected>Choose Car</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
        </select>
        <div class="tw-input-icon">
            <!-- Heroicon name: solid/chevron-down -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </div>
    </div>
</div>

```html
<div class="tw-input-field">
    <label for="name" class="tw-label">Select</label>
    <div class="tw-input-wrapper">
        <select type="text" 
                name="name" 
                id="name" 
                class="focus:tw-border-drumeo"
                placeholder="Jane Doe">
            <option value="" selected>Choose Car</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
        </select>
        <div class="tw-input-icon">
            <!-- Heroicon name: solid/chevron-down -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </div>
    </div>
</div>
```

###### Link Dropdown
<br>

<div class="tw-input-field" x-data="{dropdownMenu: false}" >
    <label id="listbox-label" class="tw-label">Links</label>
    <div class="tw-input-wrapper" x-on:click.away = "dropdownMenu = false">
        <button x-on:click="dropdownMenu = ! dropdownMenu"
                type="button"  
                aria-haspopup="listbox" 
                aria-expanded="true" 
                aria-labelledby="listbox-label"
                class="focus:tw-border-drumeo"
        >
            <span>
                Select Links
            </span>
            <span class="tw-input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </span>
        </button>
        <ul x-show="dropdownMenu" 
            class="tw-dropdown" 
            tabindex="-1" 
            x-cloak
            role="listbox" 
            aria-labelledby="listbox-label" 
            aria-activedescendant="listbox-option-3">
            <li id="listbox-option-1" 
                role="option">
                <a href="#">
                    Link 1
                </a>
            </li>
            <li id="listbox-option-2" 
                role="option">
                <a href="#">
                    Link 2
                </a>
            </li>
            <li id="listbox-option-3" 
                role="option">
                <a href="#">
                    Link 3
                </a>
            </li>
        </ul>
    </div>
</div>

```html
<div class="tw-input-field" x-data="{dropdownMenu: false}" >
    <label id="listbox-label" class="tw-label">Links</label>
    <div class="tw-input-wrapper" x-on:click.away = "dropdownMenu = false">
        <button x-on:click="dropdownMenu = ! dropdownMenu"
                type="button"  
                aria-haspopup="listbox" 
                aria-expanded="true" 
                aria-labelledby="listbox-label"
                class="focus:tw-border-drumeo"
        >
            <span>
                Select Links
            </span>
            <span class="tw-input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </span>
        </button>
        <ul x-show="dropdownMenu" 
            class="tw-dropdown" 
            tabindex="-1" 
            x-cloak
            role="listbox" 
            aria-labelledby="listbox-label" 
            aria-activedescendant="listbox-option-3">
            <li id="listbox-option-1" 
                role="option">
                <a href="#">
                    Link 1
                </a>
            </li>
            <li id="listbox-option-2" 
                role="option">
                <a href="#">
                    Link 2
                </a>
            </li>
            <li id="listbox-option-3" 
                role="option">
                <a href="#">
                    Link 3
                </a>
            </li>
        </ul>
    </div>
</div>
```

###### Radio Dropdown
<br>

<div class="tw-input-field" x-data="{dropdownMenu: false, option: ''}" >
    <label id="listbox-label" class="tw-label">Single Select</label>
    <div class="tw-input-wrapper" x-on:click.away = "dropdownMenu = false">
        <button x-on:click="dropdownMenu = ! dropdownMenu"
                type="button"  
                aria-haspopup="listbox" 
                aria-expanded="true" 
                aria-labelledby="listbox-label"
                class="focus:tw-border-drumeo"
        >
            <span x-text="option || 'Select One Item' "></span>
            <span class="tw-input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </span>
        </button>
        <ul x-show="dropdownMenu" 
            class="tw-dropdown" 
            tabindex="-1" 
            x-cloak
            role="listbox" 
            aria-labelledby="listbox-label" 
            aria-activedescendant="listbox-option-3">
            <li id="listbox-option-1" 
                role="option">
                <input type="radio" id="option-1" name="option" value="Option 1" x-model="option">
                <label for="option-1" class="tw-option">
                    <span>Option 1</span>
                    <span class="tw-input-icon" aria-hidden="true">
                        <svg class="" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </label>
            </li>
            <li id="listbox-option-2" 
                role="option">
                <input type="radio" id="option-2" name="option" value="Option 2" x-model="option">
                <label for="option-2" class="tw-option">
                    <span>Option 2</span>
                    <span class="tw-input-icon" aria-hidden="true">
                        <svg class="" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </label>
            </li>
            <li id="listbox-option-3" 
                role="option">
                <input type="radio" id="option-3" name="option" value="Option 3" x-model="option">
                <label for="option-3" class="tw-option">
                    <span>Option 3</span>
                    <span class="tw-input-icon" aria-hidden="true">
                        <svg class="" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </label>
            </li>
        </ul>
    </div>
</div>

```html
<div class="tw-input-field" x-data="{dropdownMenu: false, option: ''}" >
    <label id="listbox-label" class="tw-label">Single Select</label>
    <div class="tw-input-wrapper" x-on:click.away = "dropdownMenu = false">
        <button x-on:click="dropdownMenu = ! dropdownMenu"
                type="button"  
                aria-haspopup="listbox" 
                aria-expanded="true" 
                aria-labelledby="listbox-label"
                class="focus:tw-border-drumeo"
        >
            <span x-text="option || 'Select One Item' "></span>
            <span class="tw-input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </span>
        </button>
        <ul x-show="dropdownMenu" 
            class="tw-dropdown" 
            tabindex="-1" 
            x-cloak
            role="listbox" 
            aria-labelledby="listbox-label" 
            aria-activedescendant="listbox-option-3">
            <li id="listbox-option-1" 
                role="option">
                <input type="radio" id="option-1" name="option" value="Option 1" x-model="option">
                <label for="option-1" class="tw-option">
                    <span>Option 1</span>
                    <span class="tw-input-icon" aria-hidden="true">
                        <svg class="" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </label>
            </li>
            <li id="listbox-option-2" 
                role="option">
                <input type="radio" id="option-2" name="option" value="Option 2" x-model="option">
                <label for="option-2" class="tw-option">
                    <span>Option 2</span>
                    <span class="tw-input-icon" aria-hidden="true">
                        <svg class="" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </label>
            </li>
            <li id="listbox-option-3" 
                role="option">
                <input type="radio" id="option-3" name="option" value="Option 3" x-model="option">
                <label for="option-3" class="tw-option">
                    <span>Option 3</span>
                    <span class="tw-input-icon" aria-hidden="true">
                        <svg class="" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </label>
            </li>
        </ul>
    </div>
</div>
```
###### Checkbox Dropdown
<br>

<!-- Checkbox Dropdown -->
<div class="tw-input-field" x-data="{ dropdownMenu: false, options: [] }" >
    <label id="multi-listbox-label" for="multi-drop-trigger" class="tw-label">Multi Select</label>
    <div class="tw-input-wrapper" x-on:click.away = "dropdownMenu = false">
        <button x-on:click="dropdownMenu = ! dropdownMenu"
                x-ref="multiDropdownTrigger"
                type="button"  
                id="multi-drop-trigger"
                aria-haspopup="multi-listbox" 
                aria-expanded="true" 
                aria-labelledby="multi-listbox-label"
                class="focus:tw-border-drumeo"
        >
            <span x-text="options.length ? options : 'Select Multiple Options' "></span>
            <span class="tw-input-icon">
                <!-- Heroicon name: solid/chevron-down -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </span>
        </button>
        <!-- Dropdown -->
        <ul x-show="dropdownMenu" 
            class="tw-dropdown" 
            tabindex="-1" 
            x-cloak
            role="multi-listbox" 
            aria-labelledby="multi-listbox-label" 
            aria-activedescendant="multi-listbox-option-3">
            <li id="multi-listbox-option-1" 
                role="option">
                <input  type="checkbox" 
                        id="multi-option-1" 
                        value="Option 1"                 
                        x-model="options">
                <label for="multi-option-1" class="tw-option" x-on:click="$refs.multiDropdownTrigger.focus()">
                    <span>Option 1</span>
                    <span class="tw-input-icon" aria-hidden="true">
                        <svg class="" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </label>
            </li>
            <li id="multi-listbox-option-2" 
                role="option">
                <input type="checkbox" id="multi-option-2" value="Option 2" x-model="options">
                <label for="multi-option-2" class="tw-option" x-on:click="$refs.multiDropdownTrigger.focus()">
                    <span>Option 2</span>
                    <span class="tw-input-icon" aria-hidden="true">
                        <svg class="" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </label>
            </li>
            <li id="multi-listbox-option-3" 
                role="option">
                <input type="checkbox" id="multi-option-3" value="Option 3" x-model="options">
                <label for="multi-option-3" class="tw-option" x-on:click="$refs.multiDropdownTrigger.focus()">
                    <span>Option 3</span>
                    <span class="tw-input-icon" aria-hidden="true">
                        <svg class="" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"/>
                        </svg>
                    </span>
                </label>
            </li>
        </ul>
    </div>
</div>

```html
<!-- Checkbox Dropdown -->
<div class="tw-input-field" x-data="{ dropdownMenu: false, options: [] }" >
    <label id="multi-listbox-label" for="multi-drop-trigger" class="tw-label">Multi Select</label>
    <div class="tw-input-wrapper" x-on:click.away = "dropdownMenu = false">
        <button x-on:click="dropdownMenu = ! dropdownMenu"
                x-ref="multiDropdownTrigger"
                type="button"  
                id="multi-drop-trigger"
                aria-haspopup="multi-listbox" 
                aria-expanded="true" 
                aria-labelledby="multi-listbox-label"
                class="focus:tw-border-drumeo"
        >
            <span x-text="options.length ? options : 'Select Multiple Options' "></span>
            <span class="tw-input-icon">
                <!-- Heroicon name: solid/chevron-down -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </span>
        </button>
        <!-- Dropdown -->
        <ul x-show="dropdownMenu" 
            class="tw-dropdown" 
            tabindex="-1" 
            x-cloak
            role="multi-listbox" 
            aria-labelledby="multi-listbox-label" 
            aria-activedescendant="multi-listbox-option-3">
            <li id="multi-listbox-option-1" 
                role="option">
                <input  type="checkbox" 
                        id="multi-option-1" 
                        value="Option 1"                 
                        x-model="options">
                <label for="multi-option-1" class="tw-option" x-on:click="$refs.multiDropdownTrigger.focus()">
                    <span>Option 1</span>
                    <span class="tw-input-icon" aria-hidden="true">
                        <svg class="" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </label>
            </li>
            <li id="multi-listbox-option-2" 
                role="option">
                <input type="checkbox" id="multi-option-2" value="Option 2" x-model="options">
                <label for="multi-option-2" class="tw-option" x-on:click="$refs.multiDropdownTrigger.focus()">
                    <span>Option 2</span>
                    <span class="tw-input-icon" aria-hidden="true">
                        <svg class="" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </label>
            </li>
            <li id="multi-listbox-option-3" 
                role="option">
                <input type="checkbox" id="multi-option-3" value="Option 3" x-model="options">
                <label for="multi-option-3" class="tw-option" x-on:click="$refs.multiDropdownTrigger.focus()">
                    <span>Option 3</span>
                    <span class="tw-input-icon" aria-hidden="true">
                        <svg class="" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"/>
                        </svg>
                    </span>
                </label>
            </li>
        </ul>
    </div>
</div>
```

<br><hr>
#### Toggles
<br>

<div class="tw-toggle-field tw-mb-4 tw-relative tw-text-drumeo" x-data="{checked: false}">
    <!-- input -->
    <input type="checkbox" id="toggleB" class="tw-toggle" x-model="checked">
    <!-- line -->
    <label for="toggleB">
        <div class="tw-toggle-wrapper"
        x-bind:class="checked ? 'tw-bg-current' : 'tw-bg-gray-200' ">
            <!-- dot -->
            <div class="tw-toggle-switch tw-translate-x-0 tw-transform"
                    x-bind:class="checked ? 'tw-translate-x-5' : 'tw-translate-x-0' ">
                <span class="tw-toggle-off" 
                        x-bind:class="checked ? 'tw-opacity-0 tw-ease-out tw-duration-100' : 'tw-opacity-100 tw-ease-in tw-duration-200' "
                        aria-hidden="true"
                >
                    <svg fill="none" viewBox="0 0 12 12">
                        <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <span class="tw-toggle-on" 
                        x-bind:class="checked ? 'tw-opacity-100 tw-ease-in tw-duration-200' : 'tw-opacity-0 tw-ease-out tw-duration-100' "
                        aria-hidden="true">
                    <svg fill="currentColor" viewBox="0 0 12 12">
                        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                    </svg>
                </span>
            </div>
        </div>
    </label>
</div>

```html
<div class="tw-toggle-field tw-mb-4 tw-relative tw-text-drumeo" x-data="{checked: false}">
    <!-- input -->
    <input type="checkbox" id="toggleB" class="tw-toggle" x-model="checked">
    <!-- line -->
    <label for="toggleB">
        <div class="tw-toggle-wrapper"
        x-bind:class="checked ? 'tw-bg-current' : 'tw-bg-gray-200' ">
            <!-- dot -->
            <div class="tw-toggle-switch tw-translate-x-0 tw-transform"
                    x-bind:class="checked ? 'tw-translate-x-5' : 'tw-translate-x-0' ">
                <span class="tw-toggle-off" 
                        x-bind:class="checked ? 'tw-opacity-0 tw-ease-out tw-duration-100' : 'tw-opacity-100 tw-ease-in tw-duration-200' "
                        aria-hidden="true"
                >
                    <svg fill="none" viewBox="0 0 12 12">
                        <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <span class="tw-toggle-on" 
                        x-bind:class="checked ? 'tw-opacity-100 tw-ease-in tw-duration-200' : 'tw-opacity-0 tw-ease-out tw-duration-100' "
                        aria-hidden="true">
                    <svg fill="currentColor" viewBox="0 0 12 12">
                        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                    </svg>
                </span>
            </div>
        </div>
    </label>
</div>
```

<br><hr>

#### Input Field States

###### Disabled State
<br>

<div class="tw-input-field" disabled>
    <label for="name2" class="tw-label">Name</label>
    <div class="tw-input-wrapper">
        <input type="text" 
                name="name" 
                id="name2" 
                placeholder="Jane Doe">
    </div>
</div>

```html
<div class="tw-input-field" disabled>
    <label for="name2" class="tw-label">Name</label>
    <div class="tw-input-wrapper">
        <input type="text" 
                name="name" 
                id="name2" 
                placeholder="Jane Doe">
    </div>
</div>
```
###### Error State
<br>

<div class="tw-input-field">
    <label for="email2" class="tw-label">Email</label>
    <div class="tw-input-wrapper">
        <input  type="text" 
                name="email" 
                id="email2" 
                class="tw-border-red-500 tw-bg-red-50"
                aria-required="true"
                placeholder="you@example.com" 
                aria-invalid="true" 
                aria-describedby="email-error"
        >
        <div class="tw-input-icon">
            <!-- Heroicon name: solid/exclamation-circle -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="tw-text-red-500" aria-hidden="true">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
        </div>
        <p class="tw-input-message" id="email-error">Your password must be less than 4 characters.</p>
    </div>
</div>

###### Success State
<br>

<div class="tw-input-field">
    <label for="email3" class="tw-label">Email</label>
    <div class="tw-input-wrapper">
        <input type="text" 
                name="email" 
                id="email3" 
                class="tw-border-green-500 tw-bg-green-50"
                placeholder="you@example.com" 
                aria-invalid="false" 
                aria-required="true"
                aria-describedby="email-error"
        >
        <div class="tw-input-icon">
            <!-- Heroicon name: solid/exclamation-circle -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="tw-text-green-500">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
        </div>
        <p class="tw-input-message" id="email-error">Success.</p>
    </div>
</div>

<br>
<hr>

### Sign Up Form

<form class="tw-p-8 tw-max-w-md tw-mx-auto tw-my-5 tw-bg-white tw-rounded-lg tw-bg-gray-100">
    <img class="tw-w-48 tw-block tw-mb-10 tw-mx-auto tw-opacity-30" src="https://musora-ui.s3.amazonaws.com/logos/musora-black.svg" title="Guitareo Logo">
    <!-- email -->
    <div class="tw-input-field">
        <label for="email3" class="tw-label">Email</label>
        <div class="tw-input-wrapper">
            <input  type="email" 
                    required
                    name="email" 
                    id="email3" 
                    class="focus:tw-border-drumeo tw-placeholder-gray-400"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    title="You have entered an invalid email address."
                    placeholder="Email Address">
            <div class="tw-input-icon">
                <!-- Heroicon name: solid/exclamation-circle -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 tw-invalid-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <!-- -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 tw-valid-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>
            <p class="tw-input-message" id="email-error">Your password must be less than 4 characters.</p>
        </div>
    </div>
    <!-- password -->
    <div class="tw-input-field">
        <label for="password2" class="tw-label">Password</label>
        <div class="tw-input-wrapper">
            <input  type="password" 
                    required
                    name="password" 
                    id="password2" 
                    class="focus:tw-border-drumeo tw-placeholder-gray-400"
                    placeholder="Password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">
            <div class="tw-input-icon">
                <!-- Invalid Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 tw-invalid-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <!-- Valid Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 tw-valid-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>
            <p class="tw-input-message" id="password-error">Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.</p>
        </div>
    </div>
    <!-- submit -->
    <button class="tw-btn-primary tw-bg-drumeo tw-w-full tw-mb-6" type="submit">Sign up</button>
    <div class="tw-text-center">
        <a href="/" class="tw-text-sm tw-text-gray-400  hover:tw-text-drumeo">Forgot your password?</a>
    </div>
</form>

```html
<form class="tw-p-8 tw-max-w-md tw-mx-auto tw-my-5 tw-bg-white tw-rounded-lg tw-bg-gray-100">
    <img class="tw-w-48 tw-block tw-mb-10 tw-mx-auto tw-opacity-30" src="https://musora-ui.s3.amazonaws.com/logos/musora-black.svg" title="Guitareo Logo">
    <!-- email -->
    <div class="tw-input-field">
        <label for="email3" class="tw-label">Email</label>
        <div class="tw-input-wrapper">
            <input  type="email" 
                    required
                    name="email" 
                    id="email3" 
                    class="focus:tw-border-drumeo tw-placeholder-gray-400"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    title="You have entered an invalid email address."
                    placeholder="Email Address">
            <div class="tw-input-icon">
                <!-- Invalid Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 tw-invalid-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <!-- Valid Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 tw-valid-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>
            <p class="tw-input-message" id="email-error">Your password must be less than 4 characters.</p>
        </div>
    </div>
    <!-- password -->
    <div class="tw-input-field">
        <label for="password2" class="tw-label">Password</label>
        <div class="tw-input-wrapper">
            <input  type="password" 
                    required
                    name="password" 
                    id="password2" 
                    class="focus:tw-border-drumeo tw-placeholder-gray-400"
                    placeholder="Password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">
            <div class="tw-input-icon">
                <!-- Invalid Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 tw-invalid-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <!-- Valid Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 tw-valid-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>
            <p class="tw-input-message" id="password-error">Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.</p>
        </div>
    </div>
    <!-- submit -->
    <button class="tw-btn-primary tw-bg-drumeo tw-w-full tw-mb-6" type="submit">Sign up</button>
    <div class="tw-text-center">
        <a href="/" class="tw-text-sm tw-text-gray-400  hover:tw-text-drumeo">Forgot your password?</a>
    </div>
</form>
```