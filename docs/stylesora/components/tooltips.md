# Tooltips

A tooltip is a non-actionable label used to identify elements or provide useful information. Tooltips are commonly displayed upon click or hover and
contain brief helper text about a elements functions. A tooltip gives users contextual and userful details regarding a potentional action. 

<br><hr>
#### Types

##### Icon Tooltip
<br>

A icon tooltip is used to clarify the action or name of a clickable icon. 

<!-- Example -->
<div class="tw-pt-12 tw-text-center">
    <a href="#" class="tw-with-tooltip tw-tooltip-top tw-tooltip-center">
        <i class="fas fa-plus tw-text-3xl tw-text-drumeo" aria-hidden="true"></i>
        <div class="tw-tooltip tw-tooltip-dark">
            Top Center
        </div>
    </a>
</div>

```html
<a href="#" class="tw-with-tooltip tw-tooltip-top tw-tooltip-center">
    <i class="fas fa-plus tw-text-3xl tw-text-drumeo" aria-hidden="true"></i>
    <div class="tw-tooltip tw-tooltip-dark">
        Top Center
    </div>
</a>
```

##### Definition Tooltip
<br>

A definition tooltip provides additional information about an item or term. It may be used on an icon or other types of elements. They can also be used
or a word embedded in a paragraph. 

<!-- Example -->
<div class="tw-p-8 tw-italic">
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et 
    <span class=" tw-font-bold tw-with-tooltip tw-tooltip-bottom tw-tooltip-left">
        dolorum
        <div class="tw-tooltip tw-tooltip-dark">
            Lorum ipsum dolor sit amet, consectetur adipiscing elit
        </div>
    </span> 
    fuga.</p>
</div>

#### Color Variants

##### Light Backgrounds
<br>

<div class="tw-p-14 tw-bg-gray-100">
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-true-gray-500 tw-with-tooltip tw-tooltip-top tw-tooltip-center">
        <span>Default</span>
        <div class="tw-tooltip">
            Lorum ipsum dolor sit amet, consectetur adipiscing elit
        </div>
    </a>
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-drumeo tw-with-tooltip tw-tooltip-top tw-tooltip-center">
        <span>Informative</span>
        <div class="tw-tooltip tw-bg-drumeo-lightest tw-text-drumeo">
            <i class="fas fa-info-circle tw-text-sm tw-mr-1"></i>
            <span>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
    </a>
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-ui-success tw-with-tooltip tw-tooltip-bottom tw-tooltip-center">
        <span>Positive</span>
        <div class="tw-tooltip tw-bg-green-50 tw-text-ui-success">
            <i class="fas fa-check-circle tw-text-sm tw-mr-1"></i>
            <span>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
    </a>
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-ui-error tw-with-tooltip tw-tooltip-bottom tw-tooltip-left">
        <span>Negative</span>
        <div class="tw-tooltip tw-bg-red-50 tw-text-ui-error">
            <i class="fas fa-exclamation-triangle tw-text-sm tw-mr-1"></i>
            <span>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
    </a>
</div>

```html
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-true-gray-500 tw-with-tooltip tw-tooltip-top tw-tooltip-center">
    <span>Default</span>
    <div class="tw-tooltip">
        Lorum ipsum dolor sit amet, consectetur adipiscing elit
    </div>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-drumeo tw-with-tooltip tw-tooltip-top tw-tooltip-center">
    <span>Informative</span>
    <div class="tw-tooltip tw-bg-drumeo-lightest tw-text-drumeo">
        <i class="fas fa-info-circle tw-text-sm tw-mr-1"></i>
        <span>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span>
    </div>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-ui-success tw-with-tooltip tw-tooltip-bottom tw-tooltip-center">
    <span>Positive</span>
    <div class="tw-tooltip tw-bg-green-50 tw-text-ui-success">
        <i class="fas fa-check-circle tw-text-sm tw-mr-1"></i>
        <span>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span>
    </div>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-ui-error tw-with-tooltip tw-tooltip-bottom tw-tooltip-left">
    <span>Negative</span>
    <div class="tw-tooltip tw-bg-red-50 tw-text-ui-error">
        <i class="fas fa-exclamation-triangle tw-text-sm tw-mr-1"></i>
        <span>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span>
    </div>
</a>
```

##### Dark Backgrounds

<div class="tw-p-14">
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-true-gray-500 tw-with-tooltip tw-tooltip-top tw-tooltip-center">
        <span>Default</span>
        <div class="tw-tooltip tw-tooltip-dark">
            Lorum ipsum dolor sit amet, consectetur adipiscing elit
        </div>
    </a>
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-drumeo tw-with-tooltip tw-tooltip-top tw-tooltip-center">
        <span>Informative</span>
        <div class="tw-tooltip tw-tooltip-dark tw-bg-drumeo">
            <i class="fas fa-info-circle tw-text-sm tw-mr-1"></i>
            <span>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
    </a>
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-ui-success tw-with-tooltip tooltip-bottom tw-tooltip-center">
        <span>Positive</span>
        <div class="tw-tooltip tw-tooltip-dark tw-bg-ui-success">
            <i class="fas fa-check-circle tw-text-sm tw-mr-1"></i>
            <span>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
    </a>
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-ui-error tw-with-tooltip tw-tooltip-bottom tw-tooltip-left">
        <span>Negative</span>
        <div class="tw-tooltip tw-tooltip-dark tw-bg-ui-error tw-items-start">
            <i class="fas fa-exclamation-triangle tw-text-sm tw-mr-1"></i>
            <span>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
    </a>
</div>

```html
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-true-gray-500 tw-with-tooltip tw-tooltip-top tw-tooltip-center">
    <span>Default</span>
    <div class="tw-tooltip tw-tooltip-dark">
        Lorum ipsum dolor sit amet, consectetur adipiscing elit
    </div>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-drumeo tw-with-tooltip tw-tooltip-top tw-tooltip-center">
    <span>Informative</span>
    <div class="tw-tooltip tw-tooltip-dark tw-bg-drumeo">
        <i class="fas fa-info-circle tw-text-sm tw-mr-1"></i>
        <span>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span>
    </div>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-ui-success tw-with-tooltip tooltip-bottom tw-tooltip-center">
    <span>Positive</span>
    <div class="tw-tooltip tw-tooltip-dark tw-bg-ui-success">
        <i class="fas fa-check-circle tw-text-sm tw-mr-1"></i>
        <span>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span>
    </div>
</a>
<a href="#" class="tw-btn-secondary tw-btn-small tw-text-ui-error tw-with-tooltip tw-tooltip-bottom tw-tooltip-left">
    <span>Negative</span>
    <div class="tw-tooltip tw-tooltip-dark tw-bg-ui-error tw-items-start">
        <i class="fas fa-exclamation-triangle tw-text-sm tw-mr-1"></i>
        <span>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span>
    </div>
</a>
```

<br><hr>
#### Placement Variants
<br>

Icon tooltips may be positioned top, bottom, left, or right of the trigger item. The container of the tooltip text may be aligned to the start, center, or end. Left and right position is not available for the definition tooltip. This is to ensure that tooltip does not obstruct important information to the left or the right of the trigger.

##### Top (Left, Center, Right)
<br>

<div class="tw-p-12 tw-pb-4 tw-flex tw-justify-around">
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-true-gray-500 tw-with-tooltip tw-tooltip-top tw-tooltip-left">
        <span>Top Left</span>
        <div class="tw-tooltip tw-tooltip-dark">
            Add To List
        </div>
    </a>
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-true-gray-500 tw-with-tooltip tw-tooltip-top tw-tooltip-center">
        <span>Top Center</span>
        <div class="tw-tooltip tw-tooltip-dark">
            Add To List
        </div>
    </a>
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-true-gray-500 tw-with-tooltip tw-tooltip-top tw-tooltip-right">
        <span>Top Right</span>
        <div class="tw-tooltip tw-tooltip-dark">
            Add To List
        </div>
    </a>
</div>

##### Bottom
<br>

<div class="tw-p-12 tw-pb-4 tw-flex tw-justify-around">
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-true-gray-500 tw-with-tooltip tw-tooltip-left">
        <span>Bottom Left</span>
        <div class="tw-tooltip tw-tooltip-dark">
            Add To List
        </div>
    </a>
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-true-gray-500 tw-with-tooltip tw-tooltip-center">
        <span>Bottom Center</span>
        <div class="tw-tooltip tw-tooltip-dark">
            Add To List
        </div>
    </a>
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-true-gray-500 tw-with-tooltip tw-tooltip-right">
        <span>Bottom Right</span>
        <div class="tw-tooltip tw-tooltip-dark">
            Add To List
        </div>
    </a>
</div>

##### Side
<br>

<div class="tw-p-12 tw-pb-4 tw-flex tw-justify-around">
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-true-gray-500 tw-with-tooltip tw-tooltip-leftside">
        <span>Left Side</span>
        <div class="tw-tooltip tw-tooltip-dark">
            Add To List
        </div>
    </a>
    <a href="#" class="tw-btn-secondary tw-btn-small tw-text-true-gray-500 tw-with-tooltip tw-tooltip-rightside">
        <span>Right Side</span>
        <div class="tw-tooltip tw-tooltip-dark">
            Add To List
        </div>
    </a>
</div>