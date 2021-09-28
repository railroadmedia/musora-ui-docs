# Content Lists

Content Lists are groups of similar or related content. Musroa uses lists to display large amounts of data. List can contain up to eight columns within the 
current design. The hierarchy of content flows from left to right, the most important data occupying the left side and least important on the right. 

<br><hr>
#### Standard Content Lists
<br>

<div class="tw-bg-gray-100 tw-py-6 tw-px-4">
    <ul>
        <!-- Card -->
        <li class="tw-bg-white tw-border-solid tw-border-0 tw-border-b tw-border-gray-200 tw-flex tw-items-center">
            <!-- Link To Lesson -->
            <a href="#" class="tw-flex tw-pl-3 tw-flex-grow tw-flex-col lg:tw-items-center lg:tw-flex-row tw-transition-colors tw-p-3 hover:tw-bg-drumeo-100 tw-duration-200 tw-ease-in-out">
                <!--thubnail -->
                <div class="tw-w-20 tw-h-14 tw-mr-4 tw-rounded tw-bg-gray-300"></div>
                <!-- Title -->
                <div class="tw-flex-grow">
                    <h3 class="tw-uppercase tw-text-sm tw-font-normal tw-text-drumeo">Content Type</h3>
                    <p class="tw-text-sm tw-font-bold">This Is The Lesson Title</p>
                </div>
                <!-- Optional Content -->
                <div class="tw-uppercase tw-text-xs tw-flex tw-text-gray-400">
                    <p class="tw-pr-3 lg:tw-px-3">All</p>
                    <p class="tw-pr-3 lg:tw-px-3">20 Lessons</p> 
                    <p class="lg:tw-px-3">May 16/24</p> 
                </div>
            </a>
            <!-- CTAs-->
            <div class="tw-flex tw-items-center tw-text-gray-300 tw-p-3">
                <i class="fa fa-plus tw-text-3xl tw-px-3 tw-hidden lg:tw-block transition-colors tw-duration-200 tw-ease-in-out  hover:tw-text-black tw-cursor-pointer" aria-hidden="true"></i>
                <i class="fas fa-play-circle tw-text-3xl tw-px-3 transition-colors tw-duration-200 tw-ease-in-out hover:tw-text-black tw-cursor-pointer"></i>
            </div>
        </li>
    </ul>
</div>

```html
<!-- Card -->

```
<br>

#### Anatomy of A Card
<br>

- Thumbnail
- Content
- Optional Content 
- CTA's

<!-- 
    Add CSS Counters for Ordered Lists
    Figure out entire card being link
    Match Styles
    Add Large Variant
-->