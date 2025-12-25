import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Floating vertical tab -->
    <button
      (click)="open = !open"
      class="fixed right-0 top-1/2 -translate-y-1/2 pr-1 pl-2 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-l-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 select-none z-40"
      style="writing-mode: vertical-rl; text-orientation: mixed;"
      aria-label="Open Customizer"
    >
      <span class="font-semibold tracking-wide">CUSTOMIZE</span>
      <span class="mt-2 inline-block rotate-90">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-blue-600">
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-width="2"/>
          <path d="M19.4 13a7.4 7.4 0 00.06-2l2.03-1.57-1.76-3.05-2.43.98a7.5 7.5 0 00-1.73-1l-.37-2.6h-3.52l-.37 2.6c-.62.24-1.2.56-1.73 1l-2.43-.98-1.76 3.05L4.54 11a7.4 7.4 0 00.06 2l-2.03 1.57 1.76 3.05 2.43-.98c.53.43 1.11.76 1.73 1l.37 2.6h3.52l.37-2.6c.62-.24 1.2-.56 1.73-1l2.43.98 1.76-3.05L19.4 13z" stroke="currentColor" stroke-width="2"/>
        </svg>
      </span>
    </button>

    <!-- Slide-out Drawer -->
    <div class="fixed right-0 top-0 h-dvh w-[320px] max-w-[80vw] bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-l border-gray-200 dark:border-gray-700 z-50 transform transition-transform duration-300"
         [class.translate-x-full]="!open">
      <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <h3 class="font-semibold">Theme Customizer</h3>
        <button (click)="open=false" aria-label="Close" class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">✕</button>
      </div>
      <div class="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
        Explore diferentes estilos de acordo com suas preferências
      </div>
      <div class="px-4 py-2">
        <button (click)="reset()" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
          <span class="inline-block rotate-0">↻</span>
          Reset to default
        </button>
      </div>
      <div class="px-4 pb-4">
        <h4 class="font-semibold mb-2">Color Scheme</h4>
        <div class="grid grid-cols-1 gap-3">
          <label class="cursor-pointer">
            <div class="rounded-lg border" [class.border-blue-500]="mode==='light'" [class.border-gray-300]="mode!=='light'">
              <div class="h-16 rounded-t-lg bg-gray-50 border-b"></div>
              <div class="p-2 text-center">
                <input type="radio" name="scheme" [checked]="mode==='light'" (change)="set('light')" />
                <span class="ml-1 text-sm">Light</span>
              </div>
            </div>
          </label>
          <label class="cursor-pointer">
            <div class="rounded-lg border" [class.border-blue-500]="mode==='dark'" [class.border-gray-300]="mode!=='dark'">
              <div class="h-16 rounded-t-lg bg-gray-900 border-b"></div>
              <div class="p-2 text-center">
                <input type="radio" name="scheme" [checked]="mode==='dark'" (change)="set('dark')" />
                <span class="ml-1 text-sm">Dark</span>
              </div>
            </div>
          </label>
          <label class="cursor-pointer">
            <div class="rounded-lg border" [class.border-blue-500]="mode==='system'" [class.border-gray-300]="mode!=='system'">
              <div class="h-16 rounded-t-lg bg-gradient-to-r from-gray-50 to-gray-900 border-b"></div>
              <div class="p-2 text-center">
                <input type="radio" name="scheme" [checked]="mode==='system'" (change)="set('system')" />
                <span class="ml-1 text-sm">Auto</span>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  `,
})
export class CustomizerComponent {
  open = false;
  mode: 'light' | 'dark' | 'system' = 'system';

  constructor(private theme: ThemeService) {
    this.mode = this.theme.getMode();
  }

  set(m: 'light'|'dark'|'system') {
    this.mode = m;
    this.theme.setMode(m);
  }

  reset() {
    this.set('system');
  }
}
