# Breadcrumbs

Breadcrumbs area a navigation system used to show users their current location relative to the information architecture. Breadcrumbs allow users to
quickly move up or down to a parent level. Breadcrumbs are effective in situations that have a large amount of content organized in a hierachy of 
more that two levels. 

Breadcrumbs are treated as a secondary navigation only. They should never entirely replace the primary navigation. They also should not be use on a
single level experience. 

<br><hr>
#### Dark Background 
<br>

<nav class="tw-flex tw-border tw-bg-blue-900" aria-label="Breadcrumb">
  <ol class="tw-flex tw-items-center tw-justify-center tw-w-full tw-space-x-2">
    <li class="tw-flex">
      <div class="tw-flex">
        <a href="#" class="tw-flex tw-items-center tw-text-blue-200 hover:tw-text-blue-100">
            <!-- Heroicon name: home -->
            <svg class="ftw-lex-shrink-0 tw-h-5 tw-w-5 tw-transition tw-duration-150 tw-ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span class="tw-sr-only">Home</span>
        </a>
      </div>
    </li>
    <li>
      <div class="tw-flex tw-items-center tw-space-x-2">
        <a href="#" class="tw-flex tw-items-center tw-text-blue-200 hover:tw-text-blue-100">
            <span class="tw-mr-2">/</span>
            <span>PACKS</span>
        </a>
      </div>
    </li>
    <li>
      <div class="tw-flex tw-items-center tw-space-x-2">
        <a href="#" aria-current="page" class="tw-flex tw-items-center tw-text-blue-200 hover:tw-text-blue-100">
            <span class="tw-mr-2">/</span>
            <span class="tw-font-bold">PACK NAME</span>
        </a>
      </div>
    </li>
  </ol>
</nav>

```html
<nav class="tw-flex tw-border tw-bg-blue-900" aria-label="Breadcrumb">
  <ol class="tw-flex tw-items-center tw-justify-center tw-w-full tw-space-x-2">
    <li class="tw-flex">
      <div class="tw-flex">
        <a href="#" class="tw-flex tw-items-center tw-text-blue-200 hover:tw-text-blue-100">
            <!-- Heroicon name: home -->
            <svg class="ftw-lex-shrink-0 tw-h-5 tw-w-5 tw-transition tw-duration-150 tw-ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span class="tw-sr-only">Home</span>
        </a>
      </div>
    </li>
    <li>
      <div class="tw-flex tw-items-center tw-space-x-2">
        <a href="#" class="tw-flex tw-items-center tw-text-blue-200 hover:tw-text-blue-100">
            <span class="tw-mr-2">/</span>
            <span>PACKS</span>
        </a>
      </div>
    </li>
    <li>
      <div class="tw-flex tw-items-center tw-space-x-2">
        <a href="#" aria-current="page" class="tw-flex tw-items-center tw-text-blue-200 hover:tw-text-blue-100">
            <span class="tw-mr-2">/</span>
            <span class="tw-font-bold">PACK NAME</span>
        </a>
      </div>
    </li>
  </ol>
</nav>
```

<br><hr>

#### White or Light Background
<br>

<nav class="tw-flex tw-border tw-bg-gray-100" aria-label="Breadcrumb">
  <ol class="tw-flex tw-items-center tw-justify-center tw-w-full tw-space-x-2">
    <li class="tw-flex">
      <div class="tw-flex">
        <a href="#" class="tw-flex tw-items-center tw-text-gray-500 hover:tw-text-gray-400">
            <!-- Heroicon name: home -->
            <svg class="ftw-lex-shrink-0 tw-h-5 tw-w-5 tw-transition tw-duration-150 tw-ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span class="tw-sr-only">Home</span>
        </a>
      </div>
    </li>
    <li>
      <div class="tw-flex tw-items-center tw-space-x-2">
        <a href="#" class="tw-flex tw-items-center tw-text-gray-500 hover:tw-text-gray-400">
            <span class="tw-mr-2">/</span>
            <span>PACKS</span>
        </a>
      </div>
    </li>
    <li>
      <div class="tw-flex tw-items-center tw-space-x-2">
        <a href="#" aria-current="page" class="tw-flex tw-items-center tw-text-gray-500 hover:tw-text-gray-400">
            <span class="tw-mr-2">/</span>
            <span class="tw-font-bold">PACK NAME</span>
        </a>
      </div>
    </li>
  </ol>
</nav>

```html
<nav class="tw-flex tw-border tw-bg-gray-100" aria-label="Breadcrumb">
  <ol class="tw-flex tw-items-center tw-justify-center tw-w-full tw-space-x-2">
    <li class="tw-flex">
      <div class="tw-flex">
        <a href="#" class="tw-flex tw-items-center tw-text-gray-500 hover:tw-text-gray-400">
            <!-- Heroicon name: home -->
            <svg class="ftw-lex-shrink-0 tw-h-5 tw-w-5 tw-transition tw-duration-150 tw-ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span class="tw-sr-only">Home</span>
        </a>
      </div>
    </li>
    <li>
      <div class="tw-flex tw-items-center tw-space-x-2">
        <a href="#" class="tw-flex tw-items-center tw-text-gray-500 hover:tw-text-gray-400">
            <span class="tw-mr-2">/</span>
            <span>PACKS</span>
        </a>
      </div>
    </li>
    <li>
      <div class="tw-flex tw-items-center tw-space-x-2">
        <a href="#" aria-current="page" class="tw-flex tw-items-center tw-text-gray-500 hover:tw-text-gray-400">
            <span class="tw-mr-2">/</span>
            <span class="tw-font-bold">PACK NAME</span>
        </a>
      </div>
    </li>
  </ol>
</nav>
```

<!-- Example -->