import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TestingComponent } from './testing/testing.component';
import { QuestDashboardComponent } from './quest-dashboard/quest-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowQuestComponent } from './show-quest/show-quest.component';
import { AddQuestComponent } from './add-quest/add-quest.component';
import { HeroBuilderComponent } from './hero-builder/hero-builder.component';
import { BuilderDashboardComponent } from './builder-dashboard/builder-dashboard.component';

export const AppRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent },
    { path: 'testing', component: TestingComponent },
    { path: 'quest-dashboard', component: QuestDashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'show-quests', component: ShowQuestComponent },
    { path: 'add-quests', component: AddQuestComponent },
    { path: 'hero-builder', component: HeroBuilderComponent },
    { path: 'hero-dashboard', component: BuilderDashboardComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
