# Content Lists

Content Lists are groups of similar or related content. Musroa uses lists to display large amounts of data. List can contain up to eight columns within the 
current design. The hierarchy of content flows from left to right, the most important data occupying the left side and least important on the right. 

<br><hr>
#### Standard Content Lists
<br>

<div class="tw-bg-gray-100 tw-py-6 tw-px-4">
    <!-- Card -->
    <div class="tw-bg-white tw-p-4 tw-border-solid tw-border-0 tw-border-b tw-border-gray-200 tw-flex tw-items-center tw-transition-colors hover:tw-bg-drumeo-100">
        <!--thubnail -->
        <div class="tw-w-20 tw-h-14 tw-rounded tw-bg-gray-300"></div>
        <!-- Content -->
        <div class="tw-flex tw-pl-3 tw-flex-grow tw-flex-col lg:tw-items-center lg:tw-flex-row">
            <!-- Title -->
            <div class="tw-flex-grow">
                <h3 class="tw-uppercase tw-text-sm tw-font-normal tw-text-drumeo">Content Type</h3>
                <p class="tw-text-sm tw-font-bold">This Is The Lesson Title</p>
            </div>
            <!-- Optional Content -->
            <div class="tw-uppercase tw-text-xs tw-flex tw-text-gray-400">
                <p class="tw-pr-3 lg:tw-px-4">All</p>
                <p class="tw-pr-3 lg:tw-px-4">20 Lessons</p> 
                <p class="lg:tw-px-4">May 16/24</p> 
            </div>
        </div>
        <!-- Main CTA-->
        <div class="tw-flex tw-items-center tw-text-gray-300">
            <i class="fa fa-plus tw-text-4xl tw-px-4 tw-hidden lg:tw-block transition-colors hover:tw-text-black tw-cursor-pointer" aria-hidden="true"></i>
            <i class="fas fa-play-circle tw-text-4xl tw-px-4 transition-colors hover:tw-text-black tw-cursor-pointer"></i>
        </div>
    </div>
</div>

```html
<!-- Card -->
<div class="tw-bg-white tw-p-4 tw-border-solid tw-border-0 tw-border-b tw-border-gray-200 tw-flex tw-items-center tw-transition-colors hover:tw-bg-drumeo-100">
    <!--thubnail -->
    <img src="" class="tw-w-20 tw-h-14 tw-rounded">
    <!-- Content -->
    <div class="tw-flex tw-pl-3 tw-flex-grow tw-flex-col lg:tw-items-center lg:tw-flex-row">
        <!-- Title -->
        <div class="tw-flex-grow">
            <h3 class="tw-uppercase tw-text-sm tw-font-normal tw-text-drumeo">Content Type</h3>
            <p class="tw-text-sm tw-font-bold">This Is The Lesson Title</p>
        </div>
        <!-- Optional Content -->
        <div class="tw-uppercase tw-text-xs tw-flex tw-text-gray-400">
            <p class="tw-pr-3 lg:tw-px-4">All</p>
            <p class="tw-pr-3 lg:tw-px-4">20 Lessons</p> 
            <p class="lg:tw-px-4">May 16/24</p> 
        </div>
    </div>
    <!-- Main CTA-->
    <div class="tw-flex tw-items-center tw-text-gray-300">
        <i class="fa fa-plus tw-text-4xl tw-px-4 tw-hidden lg:tw-block transition-colors hover:tw-text-black tw-cursor-pointer" aria-hidden="true"></i>
        <i class="fas fa-play-circle tw-text-4xl tw-px-4 transition-colors hover:tw-text-black tw-cursor-pointer"></i>
    </div>
</div>
```