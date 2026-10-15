from django.contrib import admin
from .models import Evento, Local, Inscricao, Categoria, Atividade, Relatorio

class AtividadeInline(admin.TabularInline):
    model = Atividade
    extra = 1

class RelatorioInline(admin.TabularInline):
    model = Relatorio
    extra = 1

@admin.register(Evento)
class EventoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'data_inicio', 'local')
    list_filter = ('categoria', 'local')
    search_fields = ('titulo',)
    inlines = [AtividadeInline, RelatorioInline]


admin.site.register(Local)
admin.site.register(Inscricao)
admin.site.register(Categoria)

